import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./Modal"), { ssr: false });

export default Modal;
