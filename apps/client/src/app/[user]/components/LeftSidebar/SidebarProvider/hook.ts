import { useContext } from "react";
import { SidebarContext } from ".";

export const useSidebrChip = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebarChip must be used within a SidebarProvider");
  }
  return ctx;
};
