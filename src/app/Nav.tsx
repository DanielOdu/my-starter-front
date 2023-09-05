"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <div className=" bg-green-800">
      Nav
      <Link href="./new-page">new-page</Link>
      <Link href="./third-party-api">third-party-api</Link>
      <Link href="./multiple-third-party-api">multiple-third-party-api</Link>
    </div>
  );
}
