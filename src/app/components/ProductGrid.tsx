//This product grid component is passed the items from the parent who fetched them from the endpoint. They are then saved to an items variable used in this component. A useEffect hook is used to set the filteredItems state variable based on various criteria set within the filter function assigned to 'filtered' variable. dependencies can then be set which re-run the useeffect hook each time they are changed.

"use client";
import { useState, useEffect } from "react";
import Card from "../new-page/card";
import SearchBar from "./SearchBar";

export default function ProductGrid(props) {
  const items = props.items;

  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchValueChange = (e) => {
    setSearch(e.target.value);
    console.log("search value is:", search);
  };

  useEffect(() => {
    const filtered = items.filter((item) => {
      const searchCriteria = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return searchCriteria;
    });

    setFilteredItems(filtered);
  }, [search]);

  //   console.log("filtered:", filteredItems);

  return (
    <div className=" bg-gray-900 ">
      {/* The serchbar component is imported and the state variable and handler function are passed to it */}
      <SearchBar
        searchProp={search}
        onSearchValueChange={handleSearchValueChange}
      />
      {/* Use can nest imported client components like this and pass the mapped data to it */}
      {filteredItems &&
        filteredItems.map((item, idx) => {
          return (
            <Card prop1={item.title} prop2={item.id} key={`post-${idx}`} />
          );
        })}
    </div>
  );
}
