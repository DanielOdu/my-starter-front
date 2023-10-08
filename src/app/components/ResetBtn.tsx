"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSearchContext } from "../context/search-context";

// type Props = {
//   items: any[];
//   categories: string[];
//   search: string | undefined;
//   page: number;
// };

export default function ResetBtn() {
  const router = useRouter();
  //   const url = new URL(window.location.href);
  //   const searchParams = new URLSearchParams(url.search);
  const { resetText } = useSearchContext();
  const handleResetBtnClick = () => {
    resetText();

    // console.log("search params in rest", searchParams);
    // searchParams.delete("search");
    // searchParams.delete("filter");
    // searchParams.delete("sort");
    // const url = new URL(window.location.href);
    // const stringUrl = url.toString();
    // console.log("url", stringUrl);
    router.push("/home", { scroll: false });
    console.log("RESET");
  };

  return (
    <div className=" bg-purple-400 text-white flex pb-2 max-w-full flex-wrap">
      <button onClick={handleResetBtnClick}>reset</button>
    </div>
  );
}
