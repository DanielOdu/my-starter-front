"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsCircleHalf } from "react-icons/bs";
import {
  useNavBarHeight,
  useUpdateNavBarHeight,
} from "../context/dimensionContext";

export default function Nav() {
  const [isRotated, setIsRotated] = useState(false);
  // const [navBarHeight, setNavBarHeight] = useState(0);
  const navBarRef = useRef(null);
  const navBarHeight = useNavBarHeight(); // Use the context to get the navBarHeight
  const updateNavBarHeight = useUpdateNavBarHeight();

  useEffect(() => {
    const updateHeight = () => {
      if (navBarRef.current) {
        const newHeight = navBarRef.current.offsetHeight;
        console.log("Navbar Height:", newHeight); // Log the height as it changes
        updateNavBarHeight(newHeight); // Update the context value
      }
    };

    updateHeight(); // Initial call to get the height

    // Add a resize event listener to update the height on window resize
    window.addEventListener("resize", updateHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [navBarRef, updateNavBarHeight]);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div
      className="fixed  w-full z-50 bg-black  m-0 flex justify-center py-2 border-b-2  "
      ref={navBarRef}
    >
      <div className=" max-w-[1485px] px-6  w-full flex justify-between items-center">
        <div className="space-x-3 font-black uppercase text-white ">
          <Link className="hover:text-blue-400 transition-colors" href="./">
            Landing
          </Link>
          {/* If already on a dynamic page and click 'home' link in nav it takes you to home/home FIX THIS! */}
          <Link className="hover:text-blue-400 transition-colors" href="/home">
            Product Grid
          </Link>
          <Link
            className="hover:text-blue-400 transition-colors"
            href="/carousel"
          >
            Carousel
          </Link>
          <Link className="hover:text-blue-400 transition-colors" href="/faq">
            Accordion
          </Link>
          <Link
            className="hover:text-blue-400 transition-colors"
            href="/contact"
          >
            Contact form
          </Link>
          <Link className="hover:text-blue-400 transition-colors" href="/about">
            About
          </Link>
        </div>
        <div className=" flex items-center">
          <div className="text-white px-2">LANG</div>
          <div
            className={`text-white transition cursor-pointer ${
              isRotated ? "rotate-180" : ""
            }`}
            onClick={handleClick}
          >
            <BsCircleHalf />
          </div>
        </div>
      </div>
    </div>
  );
}
