//This product grid component is passed the items from the parent who fetched them from the endpoint. They are then saved to an items variable used in this component. A useEffect hook is used to set the filteredItems state variable based on various criteria set within the filter function assigned to 'filtered' variable. dependencies can then be set which re-run the useeffect hook each time they are changed.
"use client";

import { useState, useEffect, SetStateAction } from "react";
import Card from "../new-page/card";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

type Props = {
  items: any[];
};

export default function ProductGrid({ items }: Props) {
  const productItems = items;

  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCatagories] = useState([]);

  //Handlers

  const handleSearchValueChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
    console.log("search value is:", search);
  };

  const handleCategoryBtnClick = (selectedCategory) => {
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
            <Card prop1={item.title} prop2={item.id} key={`item-${idx}`} />
          );
        })}
    </div>
  );
}
