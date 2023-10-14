"use client";
import React, { useState } from "react";
import FaqItem from "./FaqItem";

type AccordionTypes = {
  question: string;
  answer: string;
};

function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };
  return (
    <div className=" flex justify-center text-white">
      <ul className="pointer-events-auto max-w-xl mt-4 mx-4 ">
        {items.map((item, idx) => (
          <FaqItem
            key={idx}
            data={item}
            isOpen={idx === currentIdx}
            btnOnClick={() => btnOnClick(idx)}
          />
        ))}
      </ul>
    </div>
  );
}

export default FaqAccordion;
export type { AccordionTypes };
