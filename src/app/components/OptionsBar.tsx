"use client";
import React, { useEffect, useState } from "react";
import {
  useNavBarHeight,
  useMobileNavBarHeight,
} from "../context/dimensionContext";
import ServerSearch from "./ServerSearch";
import SortMenu from "./SortMenu";
import ResetBtn from "./ResetBtn";
import FilterBar from "./FilterBar";
import { useSearchContext } from "../context/context";

type optionTypes = {
  search?: string;
  sort?: string;
  items: string[];
  categories: string[];
  page: number;
};

type filterContextType = {
  selectedCategories: string[];
};

function Options({ search, sort, items, categories, page }: optionTypes) {
  const { selectedCategories } =
    useSearchContext() as unknown as filterContextType;

  const filterState = () => {
    if (selectedCategories.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const [filterOpen, setFilterOpen] = useState(filterState);
  const navBarHeight = useNavBarHeight();
  const mobileNavBarHeight = useMobileNavBarHeight();
  const topValue = navBarHeight
    ? `${navBarHeight}px`
    : `${mobileNavBarHeight}px`;

  // console.log("navBarHeight", navBarHeight);
  // console.log("MobileNavBarHeight", mobileNavBarHeight);

  const handleFilterBtnClick = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    // <div className={`bg-pink-400 top-[${navBarHeight}px] sticky z-20  `}>
    <div
      className={` bg-black/90 backdrop-blur-sm sticky z-20 text-white  `}
      //this navBarHeight had to be given to the div using the 'style' prop and not directly in the className using template literals.
      style={{ top: topValue }}
    >
      {/* Items can also be passed to a child component as a prop. Within the child component the items can be saved to another component specific variable and be mapped over. */}
      <div className=" pt-2   ">
        <div className=" sm:pt-0 space-y-2 sm:space-y-0  sm:flex sm:flex-wrap sm:items-center gap-2 sm:pb-2">
          <div className="hidden sm:flex">
            <ServerSearch search={search} />
          </div>
          <div className=" flex gap-2  ">
            <div className="hidden sm:block">
              <SortMenu sortOption={sort} />
            </div>
            <div className="  w-full ">
              {" "}
              <button
                className=" border-2 rounded-sm text-center w-full sm:w-40  "
                onClick={handleFilterBtnClick}
              >
                Filter
                {selectedCategories.length > 0 && selectedCategories.length}
              </button>
            </div>
          </div>

          <div className="hidden sm:block text-red-600">
            <ResetBtn />
          </div>
        </div>
      </div>

      {filterOpen && (
        <>
          <FilterBar
            items={items}
            categories={categories}
            search={search}
            page={page}
            sortOption={sort}
          />
          <div className="block sm:hidden">
            <ResetBtn />
          </div>
        </>
      )}
    </div>
  );
}

export default Options;
