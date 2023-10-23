"use client";

import { useRouter } from "next/navigation";
import { useSearchContext, ContextValueType } from "../context/context";
import { AiOutlineReload } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";

export default function ResetBtn() {
  const router = useRouter();

  const { resetText, resetFilters } =
    useSearchContext() as unknown as ContextValueType;
  const handleResetBtnClick = () => {
    resetText();
    resetFilters();
    router.push("/home", { scroll: false });
    console.log("RESET");
  };

  return (
    <div className=" bg-green-700  flex  max-w-full flex-wrap ">
      <button
        className=" flex
       px-2 items-center gap-1"
        onClick={handleResetBtnClick}
      >
        <BsArrowClockwise className=" hover:rotate-[360deg] transition-transform ease-in-out" />
        <span>Reset</span>
      </button>
    </div>
  );
}
