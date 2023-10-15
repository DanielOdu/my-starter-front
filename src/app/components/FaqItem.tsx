import React, { useEffect, useRef, useState } from "react";
import { AccordionTypes } from "./FaqAccordion";

function FaqItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionTypes;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [plusAngle, setPlusAngle] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
      setPlusAngle(45);
      console.log(isOpen, plusAngle);
    } else {
      setHeight(0);
      setPlusAngle(0);
      console.log(isOpen, plusAngle);
    }
  }, [isOpen]);
  return (
    <li className="  mb-4 border-2 border-offblack overflow-hidden rounded-md">
      <div
        className={`${
          isOpen
            ? "flex  border-b  py-2 transition-all cursor-pointer "
            : "flex   py-2 border-transparent transition-all cursor-pointer"
        }`}
        onClick={btnOnClick}
      >
        <button className="flex justify-between  w-full  ">
          <h3 className=" font-medium px-2">{data.question}</h3>
          <h3
            className={`${
              isOpen
                ? "rotate-45 transition-all ease-in-out mr-2 text-yellow-300"
                : "rotate-0 transition-all ease-in-out mr-2"
            }`}
          >
            +
          </h3>
        </button>
      </div>
      <div className="  ease-in-out transition-all" style={{ height }}>
        <div ref={contentRef} className="py-2 px-2">
          {data.answer}
        </div>
      </div>
    </li>
  );
}

export default FaqItem;
