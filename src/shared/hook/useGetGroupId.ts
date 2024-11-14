"use client";
import { usePathname } from "next/navigation";

const useGetGroupId = () => {
  const path = usePathname();
  return path.split("/")[2];
};

export default useGetGroupId;
