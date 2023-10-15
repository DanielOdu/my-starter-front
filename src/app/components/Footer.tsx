"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="fixed bottom-0 z-50  w-full bg-black  py-2 border-t-2 border-white flex justify-center">
      <div className=" w-full max-w-[1485px] grid grid-cols-3 px-6">
        <div className=" font-black text-xs flex  uppercase text-white space-x-3 items-center ">
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
          </Link>
        </div>
        <span className=" justify-self-center text-white">
          © copyright {year}
        </span>
        <div className="flex w-28 justify-between  items-center justify-self-end text-white">
          <Link href={"#"} className="hover:text-blue-400 transition-colors">
            <FaGlobe />
          </Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">
            <FaXTwitter />
          </Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">
            <FaInstagram />
          </Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
