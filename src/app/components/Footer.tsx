"use client";

import Link from "next/link";
import { SetStateAction, useState } from "react";
import { FaXTwitter, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa6";
import Modal from "./Modal";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const openTermsModal = () => {
    setTermsModalOpen(true);
  };

  const closeModal = () => {
    setTermsModalOpen(false);
  };

  const year = new Date().getFullYear();
  return (
    <>
      <div className=" sm:fixed bottom-0 z-50  w-full  py-2 border-t-2 border-white flex justify-center bg-black ">
        <div className=" w-full max-w-[1485px] grid grid-cols-2 sm:grid-cols-3 px-6">
          <span className=" justify-self-start text-white text-xs">
            © copyright {year}
          </span>

          <div className="hidden sm:flex w-28 justify-between  items-center justify-self-center text-white">
            <Link href={"#"} className="hover:text-blue-400 transition-colors">
              <FaGlobe />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <FaXTwitter />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <FaGithub />
            </Link>
          </div>

          <div className="  text-xs flex text-white space-x-3 items-center justify-self-end ">
            <span
              className="hover:text-blue-400 transition-colors cursor-pointer "
              onClick={openTermsModal}
            >
              Ts&Cs
            </span>
            <span>|</span>
            <Link className="hover:text-blue-400 transition-colors" href="/">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {termsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Modal closeModal={closeModal}>
              <div className="   max-h-full w-full m-auto text-white ">
                <div className=" flex-col ">
                  <div className=" flex justify-between border-b-2 border-white pb-6 mb-2">
                    <div className="  ">Terms & Conditions</div>
                  </div>
                  <div className="  h-80 overflow-y-scroll py-2 ">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus ultrices scelerisque velit, sed accumsan dui
                      feugiat eget. Pellentesque placerat suscipit bibendum. Nam
                      blandit fermentum arcu, non pulvinar justo accumsan
                      rhoncus. Maecenas eget mi quam. Quisque lobortis leo vel
                      felis finibus blandit. Sed egestas est non turpis viverra
                      auctor. Nunc at tincidunt odio, vel congue diam.
                      Pellentesque accumsan ex sit amet metus ullamcorper, in
                      faucibus arcu bibendum. Vestibulum mi nunc, facilisis ac
                      faucibus at, ornare in nisi. Proin sed lacinia est.
                      Maecenas eget lorem eu est egestas fringilla. Nulla mollis
                      blandit ipsum, eu euismod augue dignissim eu. Nulla
                      porttitor turpis a erat aliquet congue. Cras id tincidunt
                      turpis. Pellentesque efficitur maximus justo, id feugiat
                      elit condimentum at. Nullam pretium bibendum lacus, non
                      rhoncus dui malesuada quis. Sed volutpat elementum odio,
                      at tempor diam fermentum vitae. Suspendisse a laoreet
                      lorem, nec dapibus mauris. Sed scelerisque libero id
                      efficitur condimentum. Donec gravida erat sit amet auctor
                      malesuada. Nullam maximus porttitor viverra. Sed eu quam
                      quis felis posuere mattis et sit amet sapien. Donec semper
                      velit vel pharetra placerat. Aliquam quis est placerat,
                      mattis ipsum vitae, vulputate elit. Ut purus ex, volutpat
                      eu cursus non, ultricies in felis. Nam ut leo eu ipsum
                      pharetra scelerisque in sit amet lacus. Curabitur
                      fringilla, felis nec lacinia hendrerit, massa sem euismod
                      dui, in finibus mi lectus sit amet magna. Donec sit amet
                      pellentesque sem, malesuada accumsan tortor. Suspendisse
                      dictum aliquam mauris, at tincidunt quam varius a. Integer
                      in turpis ex. Ut a justo nisi. Nulla vitae ipsum erat.
                      Donec neque risus, ultricies eu pellentesque non, mattis
                      id nunc. Duis pharetra felis sit amet lacinia aliquet. Sed
                      vitae velit nisl. Donec ac ornare nunc. Curabitur vel
                      justo risus. Sed quis neque eros. Aenean eu nisi vitae
                      turpis condimentum luctus. Aliquam erat volutpat. Vivamus
                      id luctus nunc, et feugiat quam. Proin consequat bibendum
                      mollis. Sed tristique ipsum diam, a vehicula enim viverra
                      a. Integer nec auctor lectus, a efficitur eros. Praesent
                      pellentesque urna metus. Praesent mattis finibus suscipit.
                      Donec vitae cursus lacus. Ut ultricies eleifend lorem ut
                      euismod. Nam a scelerisque ex, non porttitor tellus. Sed
                      ac laoreet dolor, et suscipit mauris. Nullam sagittis
                      nulla a sem fermentum, ac ullamcorper nunc luctus. Donec
                      mattis tincidunt turpis, eu sollicitudin magna viverra id.
                      Ut vulputate risus cursus sagittis congue. Mauris finibus
                      ac risus et mollis. Donec id tellus fringilla ex gravida
                      molestie. Fusce lacus felis, laoreet eget pellentesque
                      eget, posuere nec tellus. Quisque in purus risus. Ut vel
                      augue ac sapien ullamcorper semper.
                    </p>
                  </div>
                  <div className=" flex justify-between border-t-2 border-white pt-6 mt-2">
                    <Link
                      className="hover:text-blue-400 transition-colors w-full"
                      href="/"
                    >
                      Go to Ts&Cs
                    </Link>
                    <button
                      className=" bg-red-500 text-right"
                      onClick={closeModal}
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function MobileSocialFooter() {
  return (
    <div className="  sm:hidden px-4 w-full max-w-[1485px] flex justify-center py-3 border-t-2 bottom-0 ">
      <div className="flex  w-28 justify-between  items-center justify-self-center text-white">
        <Link href={"#"} className="hover:text-blue-400 transition-colors">
          <FaGlobe />
        </Link>
        <Link href="#" className="hover:text-blue-400 transition-colors">
          <FaXTwitter />
        </Link>
        <Link href="#" className="hover:text-blue-400 transition-colors">
          <FaInstagram />
        </Link>
        <Link href="#" className="hover:text-blue-400 transition-colors">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}
