"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// type Props = { searchProp: string | number; onSearchValueChange: any };

export default function ServerSearch({ search }: { search?: string }) {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  //use debounce here

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (!text) {
      router.push(`/home`);
    } else {
      router.push(`/home?search=${text}`);
    }
  }, [text, router]);

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
