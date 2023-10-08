"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type Props = {
  items: any[];
  categories: string[];
  search: string | undefined;
  page: number;
};

export default function FilterBar({ items, categories, search, page }: Props) {
  const router = useRouter();
  const initialRender = useRef(true);
  const [selectedCategories, setSelectedCatagories] = useState<any[]>([]);

  const handleCategoryBtnClick = (selectedCategory: string) => {
    if (selectedCategories.includes(selectedCategory)) {
      let categories = selectedCategories.filter(
        (el) => el != selectedCategory
      );
      setSelectedCatagories(categories);
    } else {
      setSelectedCatagories([...selectedCategories, selectedCategory]);
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

  return (
    <div className=" bg-orange-400 text-white flex space-x-3 pb-2 max-w-full flex-wrap">
      {categories &&
        categories.map((category, idx) => {
          return (
            //* When passing a function that takes parameters as a prop, use this notation <<
            <div key={`categories-${idx}`}>
              <button
                onClick={() => handleCategoryBtnClick(category)}
                className={`${
                  selectedCategories?.includes(category)
                    ? "activeCategory"
                    : "inactiveCategory"
                } `}
              >
                {category}
              </button>
            </div>
          );
        })}
    </div>
  );
}
