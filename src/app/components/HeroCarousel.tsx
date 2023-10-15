"use client";

import { useEffect, useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

function HeroCarousel() {
  const slides = [
    {
      url: "https://placehold.co/1485x400/000000/FFF?text=SLIDE+ONE",
    },
    {
      url: "https://placehold.co/1485x400/000000/FFF?text=SLIDE+TWO",
    },
    {
      url: "https://placehold.co/1485x400/000000/FFF?text=SLIDE+THREE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // const slideRotation = () => {
  //   setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  //   }, 2000);
  // };

  // slideRotation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (dotBtnIndex: number) => {
    setCurrentIndex(dotBtnIndex);
  };

  // const dotIcon = ({ isActive }) => (
  //   <RxDotFilled
  //     style={{
  //       stroke: isActive ? "white" : "none",
  //       strokeWidth: isActive ? 2 : 0,
  //     }}
  //     size={30}
  //   />
  // );

  return (
    <div className="  h-[400px] max-w-[1485px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" w-full h-full bg-cover bg-center duration-500 rounded-3xl border-2 "
      ></div>
      <div className=" opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-white/25 cursor-pointer transition">
        <BiChevronLeftCircle onClick={prevSlide} size={30} />
      </div>
      <div className=" opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-white/25 cursor-pointer transition-all">
        <BiChevronRightCircle onClick={nextSlide} size={30} />
      </div>
      <div className=" text-gray-300/25  flex justify-center items-center absolute bottom-[10px] translate-x-[-50%] left-1/2 space-x-1 cursor-pointer">
        {slides.map((slide, dotBtnIndex) => (
          <div
            key={dotBtnIndex}
            onClick={() => goToSlide(dotBtnIndex)}
            style={{
              color: currentIndex === dotBtnIndex ? "blue" : "gray", // Change color based on currentIndex
            }}
          >
            <RxDotFilled
              // style={{ fill: "white" }}
              // style={dotBtnIndex === currentIndex ? "border-2" : "border-0"}
              size={30}
            />
            {/* {dotIcon} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;

// className={`${
//   slideIndex === currentIndex
//     ? "activeSlideBtn"
//     : "inactiveSlideBtn"
// }`}
// cursor-pointer border-2 rounded-full

// {{ stroke: "white", strokeWidth: 2 }}
