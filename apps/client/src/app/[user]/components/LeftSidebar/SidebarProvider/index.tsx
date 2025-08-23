"use client";

import { createContext, useState } from "react";
import { CHIP_LABELS } from "../StudyList";

type SidebarContextType = {
  selectedChip: string;
  setSelectedChip: (chip: string) => void;
};

export const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [selectedChip, setSelectedChip] = useState(CHIP_LABELS[0]);
  return (
    <SidebarContext.Provider value={{ selectedChip, setSelectedChip }}>
      {children}
    </SidebarContext.Provider>
  );
};
