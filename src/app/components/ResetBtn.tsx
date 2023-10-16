"use client";

import { useRouter } from "next/navigation";
import { useSearchContext, ContextValueType } from "../context/context";

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
    <div className=" text-white flex pb-2 max-w-full flex-wrap py-2">
      <button
        className=" rounded-full border-2 px-2"
        onClick={handleResetBtnClick}
      >
        reset
      </button>
    </div>
  );
}
