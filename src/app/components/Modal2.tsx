"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal2({ onClose, children }: Props) {
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get("showModal");

  useEffect(() => {
    if (showModal === "y") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  const closeModal = () => {
    modalRef.current?.close();
    onClose();
  };

  const modal: JSX.Element | null =
    showModal === "y" ? (
      <dialog ref={modalRef}>
        <div>
          <div>
            ok<button onClick={closeModal}>x</button>
          </div>
          {children}
        </div>
      </dialog>
    ) : null;

  return modal;
}
