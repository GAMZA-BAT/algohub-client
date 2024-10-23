"use client";

import { IcnBtnDelete } from "@/asset/svg";
import {
  backgroundStyle,
  dialogContentStyle,
  dialogStyle,
  exitStyle,
} from "@/common/component/Modal/index.css";
import { useOutsideClick } from "@/common/hook/useOutsideClick";
import { type ComponentPropsWithoutRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps extends ComponentPropsWithoutRef<"dialog"> {
  isOpen: boolean;
  onClose: () => void;
  hasCloseBtn?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  hasCloseBtn = false,
  children,
  ...props
}: ModalProps) => {
  const closeRef = useOutsideClick<HTMLDialogElement>(onClose);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const focusableElements = closeRef.current?.querySelectorAll(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    if (isOpen) document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <div className={backgroundStyle} />
            <dialog
              aria-hidden={!isOpen}
              ref={closeRef}
              className={dialogStyle}
              {...props}
            >
              <section className={dialogContentStyle}>
                {hasCloseBtn && (
                  <IcnBtnDelete
                    role="button"
                    aria-label="Close Modal"
                    width={10}
                    height={10}
                    className={exitStyle}
                    onClick={onClose}
                  />
                )}
                {children}
              </section>
            </dialog>
          </>,
          document.body,
        )}
    </>
  );
};

export default Modal;
