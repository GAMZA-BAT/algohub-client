"use client";

import { createContext, useContext, useState } from "react";
import type { SECTION_TITLE } from "../../constant";

export type SelectedChipType = keyof typeof SECTION_TITLE | "all";
type SidebarContextType = {
  selectedChip: SelectedChipType;
  setSelectedChip: (chip: SelectedChipType) => void;
};

export const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [selectedChip, setSelectedChip] = useState<SelectedChipType>("all");

  return (
    <SidebarContext.Provider value={{ selectedChip, setSelectedChip }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarChip = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebarChip must be used within a SidebarProvider");
  }
  return ctx;
};
