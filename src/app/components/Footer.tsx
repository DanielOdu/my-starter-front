"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className=" sm:fixed bottom-0 z-50  w-full bg-black  py-2 border-t-2 border-white flex justify-center flex-shrink-0">
      <div className=" w-full max-w-[1485px] grid grid-cols-2 sm:grid-cols-3 px-6">
        <span className=" justify-self-start text-white text-xs">
          © copyright {year}
        </span>

        <div className="hidden sm:flex w-28 justify-between  items-center justify-self-center text-white">
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

        <div className="  text-xs flex text-white space-x-3 items-center justify-self-end ">
          <Link className="hover:text-blue-400 transition-colors " href="/">
            Ts&Cs
          </Link>
          <span>|</span>
          <Link className="hover:text-blue-400 transition-colors" href="/">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export function MobileSocialFooter() {
  return (
    <div className=" sm:hidden px-6 w-full max-w-[1485px] flex justify-center py-4 border-t-2 bottom-0 ">
      <div className="flex  w-28 justify-between  items-center justify-self-center text-white">
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
  );
}
