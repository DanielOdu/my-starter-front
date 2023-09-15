import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { BsCircleHalf } from "react-icons/bs";

export default function Landing() {
  return (
    <>
      <main className="flex flex-col  border-2 border-gradient-to-br from-white to-gray-400 rounded-3xl overflow-hidden  h-[90%] w-[90%] my-auto    ">
        <div className="flex min-h-[85%] flex-col items-start justify-center  py-24 px-12  ">
          {/* <div className="z-10 max-w-5xl w-full items-center justify-end font-mono text-lg flex bg-blue-400">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp;
              <code className="font-mono font-bold">src/app/page.tsx</code>
            </p> 
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{" "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div> */}

          <div>
            {/* className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] " */}
            {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
         /> */}
            <h1 className=" font-black text-7xl mt-14 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent border-b-2 border-blue-400">
              THIS IS YOUR LANDING PAGE
            </h1>

            <div className="mb-32 pt-3 flex   lg:w-full lg:mb-0  lg:text-right  text-white max-h-12">
              <Link
                href="/home"
                className="group  rounded-full border-2 px-4 py-1 transition-colors hover:border-blue-400 hover:text-blue-400 hover:bg-gray-800/20 flex items-center"
                // target="_blank" // opens link in new tab
                rel="noopener noreferrer"
              >
                <h2 className="text-base font-black text-center whitespace-nowrap">
                  ENTER SITE
                  {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span> */}
                </h2>
              </Link>
              <div className="px-2 hover:rotate-180 transition-transform ">
                {/* <BsCircleHalf
                  size="36"
                  className="hover:text-blue-400 transition-colors bg-gradient-to-br from-white to-pink-400 "
                /> */}
                <svg width="36" height="36" className="">
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#Fff" />
                      <stop offset="100%" stopColor="#000" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <BsCircleHalf
                    size="36"
                    fill="url(#gradient)"
                    className="  hover:text-blue-400 transition-colors"
                    // strokeWidth="2"
                  />
                </svg>
              </div>

              {/* <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              >
              <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
              </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
              </a>
              
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-blue-600 hover:bg-red-100 hover:dark:border-red-700 hover:dark:bg-green-800/30"
              target="_blank"
              rel="noopener noreferrer"
              >
              <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                  </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Explore the Next.js 13 playground.
                  </p>
                  </a>
                  
                  <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                  Deploy{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                  </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Instantly deploy your Next.js site to a shareable URL with
                Vercelllllll.
                </p>
            </a> */}
            </div>
          </div>
        </div>
        <div className=" flex  border-t-2 border-white w-full flex-1   text-white ">
          <div className=" w-full py-4 px-12 ">
            {" "}
            <h5 className=" font-black text-blue-400">
              BASE STARTER <span className=" text-gray-200">BY DANIEL ODU</span>
            </h5>
            <p className="bg-gradient-to-br from-white to-gray-100 bg-clip-text text-transparent">
              Typescript • Tailwind CSS • React Icons • Framer Motion • Infinite
              Scrolling • Accordion • Contact Form • Typescript • Tailwind CSS •
              React Icons • Framer Motion • Infinite Scrolling • Accordion •
              Contact Form • • • •
            </p>
          </div>
          <div className=" w-48 flex max-h-full justify-between items-center border-l-2 px-12 text-gray-200 ">
            {" "}
            <Link
              href={"https://X.com/dxnielodu"}
              className="hover:text-blue-400 transition-colors"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"https://instagram.com/dxniel"}
              className="hover:text-blue-400 transition-colors"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://instagram.com/dxniel"}
              className="hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
