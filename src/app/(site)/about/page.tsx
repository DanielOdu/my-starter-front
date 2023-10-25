"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function about() {
  const [ref, inView] = useInView({
    delay: 4000,
    threshold: 1,
  });

  // useEffect(() => {
  //   if (inView) {
  //   }
  // }, [inView]);

  async function trigger() {
    const color = "green";
    const h1s = document.querySelectorAll("h1");
    h1s.forEach((h1) => {
      h1.style.color = color;
    });
  }

  useEffect(() => {
    if (inView) {
      // Change the background color of all divs to red
      console.log("in view");
      trigger();
    }
  }, [inView]);

  return (
    <div>
      {" "}
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 className=" font-black text-6xl text-white ">ABOUT</h1>
      <h1 ref={ref} className=" font-black text-6xl text-white ">
        END
      </h1>
    </div>
  );
}
