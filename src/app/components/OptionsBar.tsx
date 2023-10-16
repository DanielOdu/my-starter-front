"use client";
import React from "react";
import { useNavBarHeight } from "../context/dimensionContext";
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
  console.log("navBarHeight", navBarHeight);
  return (
    // <div className={`bg-pink-400 top-[${navBarHeight}px] sticky z-20  `}>
    <div
      className={`bg-pink-400 sticky z-20  `}
      //this navBarHeight had to be given to the div using the 'style' prop and not directly in the className using template literals.
      style={{ top: `${navBarHeight}px` }}
    >
      {/* Items can also be passed to a child component as a prop. Within the child component the items can be saved to another component specific variable and be mapped over. */}
      <div className=" flex">
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
