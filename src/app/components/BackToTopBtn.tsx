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

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <button
      className={` text-red-500 fixed z-20 left-1/2  ${
        scrollY > 1600 ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      BACK TO TOP
    </button>
  );
}
