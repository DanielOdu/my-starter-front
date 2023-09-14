"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <div className=" bg-green-800 space-x-3">
      <Link href="./">NAV</Link>
      {/* If already on a dynamic page and click 'new-page' link in nav it takes you to new-page/new-page FIX THIS! */}
      <Link href="./new-page">Home</Link>
      <Link href="./faq">FAQ</Link>
      <Link href="./contact">Contact</Link>

      <Link href="./third-party-api">third-party-api</Link>
      <Link href="./multiple-third-party-api">multiple-third-party-api</Link>
    </div>
  );
}
