//This is a clinet side component that will be exported and imported into a serverside page/component.

"use client";
import { useState } from "react";
import Link from "next/link";

type Props = { prop1: string | number; prop2?: any };

//The function takes a prop from the parent. If the data passed in as 'prop1' doesnt exist, a div saying 'empty' is returned.
// Components have only one parameter which is the props object. Its parameters and types are defined above and passed in. the ? next to prop two makes it optional
export default function Card({ prop1, prop2 }: Props) {
  const [count, setCount] = useState(1);
  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.preventDefault();
    setCount(count + 1);
  };
  if (!prop1) {
    return <div>Empty</div>;
  }
  return (
    <div className=" bg-gray-800 mb-2">
      <h1 onClick={handleClick}>{prop1}</h1>
      <h2>
        <Link href={`new-page/${prop2}`}>See details</Link>
      </h2>
      {count}
    </div>
  );
}

// However, there are some limitations on what types of props you can pass. Props passed from the server to client components need to be serializable. This means that values such as functions, Dates, etc, cannot be passed directly to client components2. You can use JSON.stringify and JSON.parse to convert them to and from strings, or use custom serializers and deserializers.

// You also cannot use context in server components, as it is not supported in Next.js 133. You can use context only within client components.
