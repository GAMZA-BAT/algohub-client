import { type ReactNode, createContext, useState } from "react";

type Context = {
  editingItem: number | null;
  handleEditItem: (id: number) => void;
  handleReset: () => void;
};

export const CommentsContext = createContext<Context>({} as Context);

export const CommentsProvider = ({ children }: { children: ReactNode }) => {
  const [editingItem, setEditingItem] = useState<number | null>(null);

  const handleEditItem = (id: number) => {
    setEditingItem(id);
  };

  const handleReset = () => {
    setEditingItem(null);
  };

  return (
    <CommentsContext.Provider
      value={{ editingItem, handleEditItem, handleReset }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
