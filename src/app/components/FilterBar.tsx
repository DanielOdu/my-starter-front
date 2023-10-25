"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSearchContext } from "../context/context";
import { BiCheckbox } from "react-icons/bi";
import { BiCheckboxSquare } from "react-icons/bi";
import ServerSearch from "./ServerSearch";
import SortMenu from "./SortMenu";

type Props = {
  items: any[];
  categories: string[];
  search: string | undefined;
  page: number;
  sortOption: string | undefined;
};

type filterContextType = {
  selectedCategories: string[];
  setSelectedCategories: (selectedCategories: string[]) => void;
};

export default function FilterBar({
  items,
  categories,
  search,
  page,
  sortOption,
}: Props) {
  const router = useRouter();
  const initialRender = useRef(true);
  const { selectedCategories, setSelectedCategories } =
    useSearchContext() as unknown as filterContextType;
  // const [selectedCategories, setSelectedCatagories] = useState<any[]>([]);

  const handleCategoryBtnClick = (selectedCategory: string) => {
    if (selectedCategories.includes(selectedCategory)) {
      let categories = selectedCategories.filter(
        (el) => el != selectedCategory
      );
      setSelectedCategories(categories);
    } else {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    }
    console.log("(ItemGrid.tsx)", { selectedCategory });
    console.log("(ItemGrid.tsx)", { selectedCategories });
    console.log(
      "search:",
      search,
      "page:",
      page,
      "selected categories:",
      selectedCategories
    );
  };
  // const productItems = items;

  //logs to see what the props that are passed in look like on the browser console. Remember any component nested within a client component becomes a client component
  // console.log(
  //   "(FilterBar.tsx) productItems passed into FilterBar",
  //   productItems
  // );
  // console.log(
  //   "(FilterBar.tsx) categories passed into FilterBar",
  //   categories
  // );

  //INSERT CODE HERE

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);

    if (selectedCategories.length === 0) {
      searchParams.delete("filter");
    } else {
      const filters = selectedCategories.join("&filter=");
      searchParams.set("filter", filters);
    }
    url.search = searchParams.toString();
    const newUrl = url.toString();

    router.push(newUrl, { scroll: false });
  }, [selectedCategories, router]);

  //sort the categories list alphabetically here and then use the sorted version. this stops the list being modified when the sortOptions are changed by the user.
  const sortedCategories = categories.sort();

  return (
    <>
      <div className=" flex flex-col sm:hidden">
        <ServerSearch search={search} />
        <SortMenu sortOption={sortOption} />
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  text-white  py-2 max-w-full  text-xs mt-2 sm:mt-0 gap-4">
        {/* flex-wrap space-x-2 */}
        {sortedCategories &&
          sortedCategories.map((category, idx) => {
            // if (categories.includes(category)){
            // console.log("selected categories:", selectedCategories);
            // }
            return (
              //* When passing a function that takes parameters as a prop, use this notation <<
              <div key={`categories-${idx}`}>
                <button
                  onClick={() => handleCategoryBtnClick(category)}
                  className={`${
                    selectedCategories?.includes(category)
                      ? "activeCategory text-left px-2 mx-2 whitespace-nowrap"
                      : "inactiveCategory text-left px-2 mx-2 whitespace-nowrap"
                  } `}
                >
                  <div className=" flex items-center">
                    <BiCheckbox className="" /> <span>{category}</span>
                  </div>
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
