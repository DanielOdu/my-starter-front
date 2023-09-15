"use client";

import Link from "next/link";
import { BsCircleHalf } from "react-icons/bs";

export default function Nav() {
  return (
    <div className="fixed  w-full z-50 bg-black  m-0 flex justify-center py-2 border-b-2  ">
      <div className=" max-w-[1485px] px-4  w-full flex justify-between items-center">
        <div className="space-x-3 font-black uppercase text-white ">
          <Link className="hover:text-blue-400 transition-colors" href="./">
            NAV
          </Link>
          {/* If already on a dynamic page and click 'home' link in nav it takes you to home/home FIX THIS! */}
          <Link className="hover:text-blue-400 transition-colors" href="./home">
            Home
          </Link>
          <Link
            className="hover:text-blue-400 transition-colors"
            href="./carousel"
          >
            Carousel
          </Link>
          <Link className="hover:text-blue-400 transition-colors" href="./faq">
            FAQ
          </Link>
          <Link
            className="hover:text-blue-400 transition-colors"
            href="./contact"
          >
            Contact
          </Link>
        </div>
        <div className=" flex items-center">
          <div className="text-white px-2">LANG</div>
          <div className=" text-white hover:rotate-180 transition hover:text-blue-400">
            <BsCircleHalf />
          </div>
        </div>
      </div>
    </div>
  );
}
