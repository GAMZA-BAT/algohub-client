import dynamic from "next/dynamic";

const Animation = dynamic(() => import("./Animation"), { ssr: false });

export default Animation;
