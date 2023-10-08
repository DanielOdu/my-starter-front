"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

export default function ServerSearch({ search }: { search?: string }) {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);

    if (!query) {
      // console.log("url", url);
      // console.log("searchParams", searchParams);
      searchParams.delete("search");
      // router.push(`/home`);
    } else {
      searchParams.set("search", query);
      // router.push(`/home?search=${query}`);
    }
    url.search = searchParams.toString();
    const newUrl = url.toString();

    router.push(newUrl);
  }, [query, router]);

  return (
    <div className=" text-white py-2 ">
      <input
        type="text"
        placeholder="serveSearch"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-green-400 rounded-3xl bg-transparent"
      />
    </div>
  );
}
