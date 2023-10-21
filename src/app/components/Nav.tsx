"use client";

import Link from "next/link";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { BsCircleHalf } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import {
  useNavBarHeight,
  useUpdateNavBarHeight,
  useUpdateMobileNavBarHeight,
} from "../context/dimensionContext";
import { navLinks } from "../lib/navLinks";
import { link } from "fs";

export default function Nav() {
  const [isRotated, setIsRotated] = useState(false);
  // const [navBarHeight, setNavBarHeight] = useState(0);
  const navBarRef = useRef(null);
  // const navBarHeight = useNavBarHeight(); // Use the context to get the navBarHeight
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
      className="fixed  w-full z-50 bg-black  m-0  justify-center py-2 border-b-2 hidden sm:flex  "
      ref={navBarRef}
    >
      <div className=" max-w-[1485px] px-6  w-full flex justify-between items-center">
        <div className="space-x-3 font-black uppercase text-white ">
          {navLinks.map((navLink) => (
            <Link
              className="hover:text-blue-400 transition-colors"
              href={navLink.link}
            >
              {navLink.label}
            </Link>
          ))}
          {/* <Link className="hover:text-blue-400 transition-colors" href="./">
            Landing
          </Link>
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
          <Link
            className="hover:text-blue-400 transition-colors "
            href="./third-party-api"
          >
            third-party-api
          </Link>
          <Link
            className="hover:text-blue-400 transition-colors"
            href="./multiple-third-party-api"
          >
            multiple-third-party-api
          </Link> */}
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

export function MobileNav() {
  const [isRotated, setIsRotated] = useState(false);
  const mobileNavBarRef = useRef(null);
  const updateNavBarHeight = useUpdateMobileNavBarHeight();
  const [linksOpen, setLinksOpen] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (mobileNavBarRef.current) {
        const newHeight = mobileNavBarRef.current.offsetHeight;
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
  }, [mobileNavBarRef, updateNavBarHeight]);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  const handleMenuClick = () => {
    setLinksOpen(!linksOpen);
    console.log("menu click");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavBarRef.current &&
        !mobileNavBarRef.current.contains(event.target) &&
        event.target.tagName !== "A"
      ) {
        setLinksOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNavBarRef]);

  // const onClick: MouseEventHandler = useCallback((e) => {
  //   if (e.target !== mobileNavBarRef.current) {
  //     setLinksOpen(false);
  //   }
  // }, []);

  return (
    <div
      className=" sm:hidden fixed  top-0 w-full z-50 px-6 text-white"
      // onClick={onClick}
    >
      <div
        className="text-white bg-black justify-between flex py-2 border-b-2   items-center relative"
        ref={mobileNavBarRef}
      >
        {" "}
        <div> LOGO</div>
        <div
          id="nav-icon3"
          className={`cursor-pointer ${linksOpen ? "open" : ""}`}
          onClick={handleMenuClick}
        >
          {/* {linksOpen ? "X" : <CgMenu />} */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <style jsx>{`
          #nav-icon3 {
            width: 30px;
            height: 24px;
            position: relative;

            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.5s ease-in-out;
            -moz-transition: 0.5s ease-in-out;
            -o-transition: 0.5s ease-in-out;
            transition: 0.5s ease-in-out;
            cursor: pointer;
          }

          #nav-icon3 span {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;

            background: #fff;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.25s ease-in-out;
            -moz-transition: 0.25s ease-in-out;
            -o-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;
          }
          #nav-icon3 span:nth-child(1) {
            top: 0px;
          }

          #nav-icon3 span:nth-child(2),
          #nav-icon3 span:nth-child(3) {
            top: 10px;
          }

          #nav-icon3 span:nth-child(4) {
            top: 20px;
          }

          #nav-icon3.open span:nth-child(1) {
            top: 18px;
            width: 0%;
            left: 50%;
          }

          #nav-icon3.open span:nth-child(2) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          }

          #nav-icon3.open span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }

          #nav-icon3.open span:nth-child(4) {
            top: 18px;
            width: 0%;
            left: 50%;
          }
        `}</style>
      </div>
      <div
        className={` bg-black/95 backdrop-blur-md overflow-hidden transition  ${
          linksOpen ? " h-full" : " h-0"
        }`}
      >
        {" "}
        <div className=" flex-col space-y-4 text-white py-4 text-right">
          {navLinks.map((navLink) => (
            <Link
              className=" block cursor-pointer active:text-blue-300 "
              href={navLink.link}
            >
              {navLink.label}
            </Link>
          ))}
        </div>
        <div className=" bg-black py-2 flex items-center justify-end">
          {" "}
          <div className=" bg-red-300">LANG</div>
          <div
            className={`text-white text-2xl  transition cursor-pointer bg-green-200 w-fit ${
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
