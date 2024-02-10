"use client";
import Marquee from "@/app/components/Marquee";
// import { useState } from "react";

// function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=one",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=two",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=three",
//   ];

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handleSwipe = (startX, endX) => {
//     const sensitivity = 50;

//     if (startX - endX > sensitivity) {
//       handleNext();
//     } else if (endX - startX > sensitivity) {
//       handlePrev();
//     }
//   };

//   return (
//     <div className="relative w-[500px]">
//       <div className="w-full overflow-hidden">
//         <div
//           className="flex transition-transform duration-300 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           onTouchStart={(e) => handleSwipe(e.touches[0].clientX, 0)}
//           onTouchMove={(e) => handleSwipe(0, e.touches[0].clientX)}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default Carousel;

// return (
// <div>
//   {" "}
//   <h1 className=" font-black text-6xl text-white ">CAROUSEL</h1>
// </div>

//works

// import { useState, useRef, useEffect } from "react";

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const images = [
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=one",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=two",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=three",
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(images.length - 1, prevIndex + 1));
//   };

//   const handleIndicatorClick = (index) => {
//     setCurrentIndex(index);
//     scrollToIndex(index);
//   };

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const scrollLeft = container.scrollLeft;
//       const index = Math.round(scrollLeft / container.clientWidth);
//       setCurrentIndex(index);
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;

//     if (container) {
//       container.addEventListener("scroll", handleScroll);

//       return () => {
//         container.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, []);

//   const scrollToIndex = (index) => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const targetScrollLeft = index * container.clientWidth;
//       container.scrollTo({
//         left: targetScrollLeft,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative w-[400px]">
//       <div
//         ref={containerRef}
//         className="flex overflow-x-auto snap-x snap-mandatory"
//         style={{
//           scrollSnapType: "x mandatory",
//         }}
//         onScroll={handleScroll}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 snap-center"
//             style={{ flex: "0 0 auto" }}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2"
//         onClick={handleNext}
//       >
//         Next
//       </button>

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleIndicatorClick(index)}
//             className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
//               currentIndex === index ? "bg-black" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

//workksssss

// import { useState, useRef, useEffect } from "react";

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const images = [
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=one",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=two",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=three",
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(images.length - 1, prevIndex + 1));
//   };

//   const handleIndicatorClick = (index) => {
//     setCurrentIndex(index);
//     scrollToIndex(index);
//   };

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const scrollLeft = container.scrollLeft;
//       const index = Math.round(scrollLeft / container.clientWidth);
//       setCurrentIndex(index);
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;

//     if (container) {
//       container.addEventListener("scroll", handleScroll);

//       return () => {
//         container.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, []);

//   const scrollToIndex = (index) => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const targetElement = container.children[index];
//       targetElement.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   };

//   return (
//     <div className="relative w-[400px] overflow-hidden">
//       <div
//         ref={containerRef}
//         className="flex snap-x snap-mandatory"
//         style={{
//           scrollSnapType: "x mandatory",
//           overflowX: "auto",
//         }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 snap-center"
//             style={{ flex: "0 0 auto" }}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2"
//         onClick={handleNext}
//       >
//         Next
//       </button>

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleIndicatorClick(index)}
//             className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
//               currentIndex === index ? "bg-black" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

//works bestt

// import { useState, useRef, useEffect } from "react";

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const images = [
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=one",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=two",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=three",
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
//     scrollToIndex(currentIndex - 1);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(images.length - 1, prevIndex + 1));
//     scrollToIndex(currentIndex + 1);
//   };

//   const handleIndicatorClick = (index) => {
//     setCurrentIndex(index);
//     scrollToIndex(index);
//   };

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const scrollLeft = container.scrollLeft;
//       const index = Math.round(scrollLeft / container.clientWidth);
//       setCurrentIndex(index);
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;

//     if (container) {
//       container.addEventListener("scroll", handleScroll);

//       return () => {
//         container.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, []);

//   const scrollToIndex = (index) => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const targetScrollLeft = index * container.clientWidth;
//       container.scrollTo({
//         left: targetScrollLeft,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative w-[400px] overflow-hidden">
//       <div
//         ref={containerRef}
//         className="flex snap-x snap-mandatory no-scrollbar"
//         style={{
//           scrollSnapType: "x mandatory",
//           overflowX: "auto",
//         }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 snap-center"
//             style={{ flex: "0 0 auto" }}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 text-green-500"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500"
//         onClick={handleNext}
//       >
//         Next
//       </button>

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleIndicatorClick(index)}
//             className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
//               currentIndex === index ? "bg-black" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

//works well but theres a dot flicker

// import { useState, useRef, useEffect } from "react";

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const images = [
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=one",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=two",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=three",
//   ];

//   const handleNavigation = (index) => {
//     setCurrentIndex(index);
//     scrollToIndex(index);
//   };

//   const handlePrev = () => handleNavigation(Math.max(0, currentIndex - 1));
//   const handleNext = () =>
//     handleNavigation(Math.min(images.length - 1, currentIndex + 1));

//   const handleScroll = () => {
//     const container = containerRef.current;
//     if (container) {
//       setCurrentIndex(Math.round(container.scrollLeft / container.clientWidth));
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//       return () => container.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   const scrollToIndex = (index) => {
//     const container = containerRef.current;
//     if (container) {
//       container.scrollTo({
//         left: index * container.clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative w-[400px] overflow-hidden">
//       <div
//         ref={containerRef}
//         className="flex snap-x snap-mandatory no-scrollbar"
//         style={{
//           scrollSnapType: "x mandatory",
//           overflowX: "auto",
//         }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 snap-center"
//             style={{ flex: "0 0 auto" }}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 text-green-500"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500"
//         onClick={handleNext}
//       >
//         Next
//       </button>

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleNavigation(index)}
//             className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
//               currentIndex === index ? "bg-black" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

// import { useState, useRef, useEffect } from "react";

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const containerRef = useRef(null);

//   const images = [
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=one",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=two",
//     "https://placehold.co/400/060606/a6a6a6/PNG?text=three",
//   ];

//   const handleNavigation = (index) => {
//     setIsAnimating(true);
//     setCurrentIndex(index);
//     scrollToIndex(index);
//   };

//   const handlePrev = () => handleNavigation(Math.max(0, currentIndex - 1));
//   const handleNext = () =>
//     handleNavigation(Math.min(images.length - 1, currentIndex + 1));

//   const handleScroll = () => {
//     const container = containerRef.current;
//     if (container) {
//       setCurrentIndex(Math.round(container.scrollLeft / container.clientWidth));
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//       container.addEventListener("transitionend", () => setIsAnimating(false), {
//         once: true,
//       });
//       return () => {
//         container.removeEventListener("scroll", handleScroll);
//         container.removeEventListener("transitionend", () =>
//           setIsAnimating(false)
//         );
//       };
//     }
//   }, []);

//   const scrollToIndex = (index) => {
//     const container = containerRef.current;
//     if (container) {
//       container.scrollTo({
//         left: index * container.clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative w-[400px] overflow-hidden">
//       <div
//         ref={containerRef}
//         className="flex snap-x snap-mandatory no-scrollbar"
//         style={{
//           scrollSnapType: "x mandatory",
//           overflowX: "auto",
//         }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 snap-center"
//             style={{ flex: "0 0 auto" }}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 text-green-500"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500"
//         onClick={handleNext}
//       >
//         Next
//       </button>

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleNavigation(index)}
//             className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
//               currentIndex === index && isAnimating ? "bg-black" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

import { useState, useRef, useEffect } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const images = [
    "https://placehold.co/400/060606/a6a6a6/PNG?text=one",
    "https://placehold.co/400/060606/a6a6a6/PNG?text=two",
    "https://placehold.co/400/060606/a6a6a6/PNG?text=three",
  ];
  const handleNavigation = (index) => {
    setCurrentIndex(index);
    scrollToIndex(index);
  };
  const handlePrev = () => {
    const prevIndex = Math.max(0, currentIndex - 1);
    handleNavigation(prevIndex);
  };
  const handleNext = () => {
    const nextIndex = Math.min(images.length - 1, currentIndex + 1);
    handleNavigation(nextIndex);
  };
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setCurrentIndex(Math.round(container.scrollLeft / container.clientWidth));
    }
  };
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            overflowX: "auto",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center"
              style={{ flex: "0 0 auto" }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-green-500"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-500"
          onClick={handleNext}
        >
          Next
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(index)}
              className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
      {/* <div>
        <div className=" w-full h-full relative pointer-events-none bg-green-300">
          <ul className=" flex gap-[1rem] p-0 m-0 list-none h-full w-fit items-center pointer-events-none">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
          </ul>
        </div>
      </div> */}
      <Marquee />
    </>
  );
};
export default ImageCarousel;
