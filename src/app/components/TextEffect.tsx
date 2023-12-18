import React, { useEffect, useRef } from "react";

type TextEffectProps = {
  text: string;
  className: string;
  enableHover: boolean;
};

const TextEffect = ({ text, className, enableHover }: TextEffectProps) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
    const ctnt = text;
    const speed = 15; // ms per frame
    const increment = 2;

    let clen = ctnt.length;
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";

    const outputElement = containerRef.current;

    const nextFrame = () => {
      for (let i = 0; i < clen - stri; i++) {
        const num = Math.floor(theLetters.length * Math.random());
        const letter = theLetters.charAt(num);
        block = block + letter;
      }

      if (si === increment - 1) {
        stri++;
      }

      if (si === increment) {
        fixed = fixed + ctnt.charAt(stri - 1);
        si = 0;
      }

      if (outputElement) {
        outputElement.textContent = fixed + block;
      }

      block = "";
      si++;
    };

    const rustle = (i: number) => {
      setTimeout(function () {
        if (i) {
          rustle(i - 1);
          nextFrame();
        }
      }, speed);
    };

    // Function to reset the animation
    const resetAnimation = () => {
      stri = 0;
      si = 0;
      block = "";
      fixed = "";
      rustle(clen * increment + 1);
    };

    // Trigger rustle on mount
    rustle(clen * increment + 1);

    // Attach event listener for hover effect if enabled
    const handleHover = () => {
      if (enableHover) {
        resetAnimation();
      }
    };

    if (outputElement) {
      outputElement.addEventListener("mouseenter", handleHover);
    }

    return () => {
      if (outputElement) {
        outputElement.removeEventListener("mouseenter", handleHover);
      }
      clearTimeout();
    };
  }, [text, enableHover]);

  return <span ref={containerRef} className={className}></span>;
};

export default TextEffect;

// import React, { useEffect, useRef } from "react";

// type TextEffectProps = {
//   text: string;
//   className: string;
//   enableHover: boolean;
// };

// const TextEffect = ({ text, className, enableHover }: TextEffectProps) => {
//   const containerRef = useRef<HTMLSpanElement | null>(null);

//   useEffect(() => {
//     const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
//     const ctnt = text;
//     const speed = 15; // ms per frame
//     const increment = 2;

//     let clen = ctnt.length;
//     let si = 0;
//     let stri = 0;
//     let block = "";
//     let fixed = "";

//     const outputElement = containerRef.current;

//     const nextFrame = () => {
//       for (let i = 0; i < clen - stri; i++) {
//         const num = Math.floor(theLetters.length * Math.random());
//         const letter = theLetters.charAt(num);
//         block = block + letter;
//       }

//       if (si === increment - 1) {
//         stri++;
//       }

//       if (si === increment) {
//         fixed = fixed + ctnt.charAt(stri - 1);
//         si = 0;
//       }

//       if (outputElement) {
//         outputElement.textContent = fixed + block;
//       }

//       block = "";
//       si++;
//     };

//     const rustle = (i: number) => {
//       setTimeout(function () {
//         if (i) {
//           rustle(i - 1);
//           nextFrame();
//         }
//       }, speed);
//     };

//     // Function to reset the animation
//     const resetAnimation = () => {
//       stri = 0;
//       si = 0;
//       block = "";
//       fixed = "";
//       rustle(clen * increment + 1);
//     };

//     // Trigger rustle on mount
//     rustle(clen * increment + 1);

//     // Attach event listener for hover effect if enabled
//     const handleHover = () => {
//       if (enableHover) {
//         resetAnimation();
//       }
//     };

//     if (outputElement) {
//       outputElement.addEventListener("mouseenter", handleHover);
//     }

//     return () => {
//       if (outputElement) {
//         // Trigger reverse animation before unmounting
//         resetAnimation();
//       }
//       clearTimeout();
//     };
//   }, [text, enableHover]);

//   return <span ref={containerRef} className={className}></span>;
// };

// export default TextEffect;
