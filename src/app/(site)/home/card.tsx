//This is a clinet side component that will be exported and imported into a serverside page/component.

"use client";
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBolt } from "react-icons/fa6";

type Props = {
  prop1: string | number;
  prop2?: any;
  prop3: string;
  prop4: number;
};

//The function takes a prop from the parent. If the data passed in as 'prop1' doesnt exist, a div saying 'empty' is returned.
// Components have only one parameter which is the props object. Its parameters and types are defined above and passed in. the ? next to prop two makes it optional
export default function Card({ prop1, prop2, prop3, prop4 }: Props) {
  // const [count, setCount] = useState(1);
  // const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
  //   event.preventDefault();
  //   setCount(count + 1);
  // };
  if (!prop1) {
    return <div>Empty</div>;
  }

  return (
    <div className="  h-fit   justify-self-center w-full  border-2 border-white rounded-2xl overflow-hidden text-white text-xs max-w-[400px] min-w-[300px]">
      <div className=" group/bolt w-full h-full relative bg-purple-500 ">
        <div className=" flex absolute opacity-0 group-hover/bolt:opacity-100 text-blue-400 top-3 left-3 transition-all  items-center space-x-1 hover:bg-gray-600/20  pointer-events-none py-1 px-2 rounded-2xl">
          <div className=" pointer-events-auto cursor-pointer peer">
            <FaBolt />
          </div>
          <span className=" opacity-0 peer-hover:opacity-100 transition-opacity select-none pointer-events-none">
            QUICK VIEW
          </span>
        </div>
        <Image
          src={prop3}
          alt="item.thumbnail"
          // className="dark:invert"
          width={400}
          height={400}
          // fill
          priority
        />
      </div>
      <div className=" grow relative  p-2">
        <h1 className=" font-black">{prop1}</h1>
        <span>{prop4}</span>
        {/* onClick={handleClick} */}
        <button className=" border-2 border-white rounded-xl px-2 my-2">
          <h2>
            <Link href={`home/${prop2}`}>See details</Link>
          </h2>
        </button>
        {/* <p>click count: {count}</p> */}
        {/* <p>Delete item button</p> */}
      </div>
    </div>
  );
}

// However, there are some limitations on what types of props you can pass. Props passed from the server to client components need to be serializable. This means that values such as functions, Dates, etc, cannot be passed directly to client components2. You can use JSON.stringify and JSON.parse to convert them to and from strings, or use custom serializers and deserializers.

// You also cannot use context in server components, as it is not supported in Next.js 133. You can use context only within client components.
