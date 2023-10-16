"use client";

import { useCallback, useEffect, useState } from "react";

export default function BackToTopBtn() {
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      className={` text-white bg-blue-200/20 rounded-full py-2 text-xs px-2 fixed z-20 left-3/4 hover:bg-gray-700 transition-all  ${
        scrollY > 1600 ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      BACK TO TOP
    </button>
  );
}
