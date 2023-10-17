"use client";
import React from "react";
import {
  useNavBarHeight,
  useMobileNavBarHeight,
} from "../context/dimensionContext";
import ServerSearch from "./ServerSearch";
import SortMenu from "./SortMenu";
import ResetBtn from "./ResetBtn";
import FilterBar from "./FilterBar";

type optionTypes = {
  search?: string;
  sort?: string;
  items: string[];
  categories: string[];
  page: number;
};

function Options({ search, sort, items, categories, page }: optionTypes) {
  const navBarHeight = useNavBarHeight();
  const mobileNavBarHeight = useMobileNavBarHeight();
  const topValue = navBarHeight
    ? `${navBarHeight}px`
    : `${mobileNavBarHeight}px`;

  console.log("navBarHeight", navBarHeight);
  console.log("MobileNavBarHeight", mobileNavBarHeight);

  return (
    // <div className={`bg-pink-400 top-[${navBarHeight}px] sticky z-20  `}>
    <div
      className={`bg-pink-400 sticky z-20  `}
      //this navBarHeight had to be given to the div using the 'style' prop and not directly in the className using template literals.
      style={{ top: topValue }}
    >
      {/* Items can also be passed to a child component as a prop. Within the child component the items can be saved to another component specific variable and be mapped over. */}
      <div className=" flex flex-wrap">
        <ServerSearch search={search} />
        <SortMenu sortOption={sort} />
        <ResetBtn />
      </div>

      <FilterBar
        items={items}
        categories={categories}
        search={search}
        page={page}
      />
    </div>
  );
}

export default Options;
