//This product grid component is passed the items from the parent who fetched them from the endpoint. They are then saved to an items variable used in this component. A useEffect hook is used to set the filteredItems state variable based on various criteria set within the filter function assigned to 'filtered' variable. dependencies can then be set which re-run the useeffect hook each time they are changed.
"use client";

import { useState, useEffect, SetStateAction, Suspense } from "react";
import Card from "../(site)/new-page/card";
// import dynamic from "next/dynamic";
// const Card = dynamic(() => import("../new-page/card"), { suspense: true });
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

// const Loading = () => <div className=" bg-lime-400">Loading...</div>;

type Props = {
  items: any[];
};

export default function ItemGrid({ items }: Props) {
  const productItems = items;
  //Remember when declaring an array state variable with the useState hook, use a generic to type the array as done for filteredItems below.
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCatagories] = useState<any[]>([]);

  //Handlers

  const handleSearchValueChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
    console.log("search value is:", search);
  };

  const handleCategoryBtnClick = (selectedCategory: string) => {
    if (selectedCategories.includes(selectedCategory)) {
      let categories = selectedCategories.filter(
        (el) => el != selectedCategory
      );
      setSelectedCatagories(categories);
    } else {
      setSelectedCatagories([...selectedCategories, selectedCategory]);
    }
    console.log({ selectedCategory });
    console.log({ selectedCategories });
  };

  useEffect(() => {
    const filtered = productItems.filter((item) => {
      const searchCriteria = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      let categoryCriteria = true; // Initialize as true if selectedCategories is empty
      if (selectedCategories.length > 0) {
        // Only check if selectedCategories is not empty
        if (selectedCategories.some((xitem) => item.category.includes(xitem))) {
          categoryCriteria = true;
        } else {
          categoryCriteria = false;
        }
      }
      return searchCriteria && categoryCriteria;
    });

    setFilteredItems(filtered);
  }, [search, selectedCategories]);

  //   console.log("filtered:", filteredItems);

  return (
    <div className=" bg-gray-900 ">
      {/* The serchbar component is imported and the state variable and handler function are passed to it */}
      <SearchBar
        searchProp={search}
        onSearchValueChange={handleSearchValueChange}
      />
      <FilterBar
        items={items}
        onCategoryBtnClick={handleCategoryBtnClick}
        selectedCategories={selectedCategories}
      />

      {/* Use can nest imported client components like this and pass the mapped data to it */}
      {filteredItems &&
        filteredItems.map((item, idx) => {
          return (
            //if you get a TS error saying 'Property does not exist on type 'never' .ts(2339)'. You can use bracket notation (item['title]) instead of dot notation (item.title)

            //Trying to add suspense here. Imported card dynamically at the top, define 'Loading' variable and wrapped card in suspense wrapper. NEED TO FIX
            // <Suspense fallback={<Loading />}>
            <Card
              prop1={item["title"]}
              prop2={item["id"]}
              key={`item-${idx}`}
            />

            // </Suspense>
          );
        })}
    </div>
  );
}
