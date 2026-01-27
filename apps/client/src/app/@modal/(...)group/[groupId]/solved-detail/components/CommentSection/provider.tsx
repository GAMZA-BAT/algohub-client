import { type ReactNode, createContext, useState } from "react";

type Context = {
  editingItem: number | null;
  handleEditItem: (id: number) => void;
  handleReset: () => void;
  solutionId: number;
};

export const CommentsContext = createContext<Context>({} as Context);

export const CommentsProvider = ({
  children,
  solutionId,
}: { children: ReactNode; solutionId: number }) => {
  const [editingItem, setEditingItem] = useState<number | null>(null);

  const handleEditItem = (id: number) => {
    setEditingItem((prev) => (prev === id ? null : id));
  };

  const handleReset = () => {
    setEditingItem(null);
  };

  return (
    <CommentsContext.Provider
      value={{ editingItem, handleEditItem, handleReset, solutionId }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
