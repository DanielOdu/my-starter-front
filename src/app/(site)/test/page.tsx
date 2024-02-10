"use client";
import { useState, useEffect } from "react";

export default function MyComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollY = window.scrollY;
  //       setScrollPosition(scrollY);
  //       console.log("scroll pos", scrollPosition);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  const rotateDegrees = scrollPosition * 0.1;

  return (
    <div className="flex flex-col items-center">
      <div
        className="h-64 overflow-y-scroll bg-green-300"
        onScroll={(e) => {
          setScrollPosition(e.currentTarget.scrollTop);
        }}
      >
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        {/* Your scrollable element */}
      </div>
      <div
        className="w-64 h-64 bg-red-500 transition-transform ease-in-out"
        style={{ transform: `rotate(${rotateDegrees}deg)` }}
      >
        {/* Your second element */}
      </div>
    </div>
  );
}
