"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  sortOption: string | undefined;
};

export default function SortMenu({ sortOption }: Props) {
  const router = useRouter();
  const initialRender = useRef(true);
  const [selectedSortOption, setSelectedSortOption] = useState(sortOption);

  const handleSortChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setSelectedSortOption(value);
    console.log("(SortMenu.tsx) selectedSortOption is:", selectedSortOption);
    // onSort(value);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);

    if (selectedSortOption === "relevance") {
      //   console.log("url", url);
      //   console.log("searchParams", searchParams);
      searchParams.delete("sort");
      // router.push(`/home`);
    } else {
      searchParams.set("sort", selectedSortOption as string);
      // router.push(`/home?search=${query}`);
    }
    url.search = searchParams.toString();
    const newUrl = url.toString();

    router.push(newUrl, { scroll: false });
  }, [selectedSortOption, router]);

  return (
    <select value={selectedSortOption} onChange={handleSortChange}>
      <option value="relevance">Relevance</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="newest-first">Newest First</option>
    </select>
  );
}
