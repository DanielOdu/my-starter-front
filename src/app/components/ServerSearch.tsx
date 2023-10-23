"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { useSearchContext } from "../context/context";
import { FiSearch } from "react-icons/fi";

type SearchContextType = {
  text: string;
  setText: (text: string) => void;
};

export default function ServerSearch({ search }: { search?: string }) {
  const router = useRouter();
  const initialRender = useRef(true);

  // const [text, setText] = useState(search);
  const { text, setText } = useSearchContext() as unknown as SearchContextType; // using context here instead of state so text can be accessed by the ResetBtn component // revisit the use of as unknown here. must be a better way

  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);

    if (!query) {
      searchParams.delete("search");
    } else {
      searchParams.set("search", query);
    }
    url.search = searchParams.toString();
    const newUrl = url.toString();

    console.log("text", text);

    router.push(newUrl, { scroll: false });
  }, [query, router]);

  // const placeholder = () => {
  //   return (
  //     <span>
  //       <FiSearch /> "Search"
  //     </span>
  //   );
  // };

  return (
    <div className="  ">
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-white rounded-sm bg-transparent placeholder:text-white/30 text-center w-full"
      />
    </div>
  );
}
