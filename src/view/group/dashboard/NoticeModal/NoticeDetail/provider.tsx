import { type ReactNode, createContext, useState } from "react";

type Context = {
  noticeEditingItem: number | null;
  handleNoticeEditItem: (id: number) => void;
  handleNoticeReset: () => void;
};

export const NoticeCommentsContext = createContext<Context>({} as Context);

export const NoticeCommentsProvider = ({
  children,
}: { children: ReactNode }) => {
  const [noticeEditingItem, setNoticeEditingItem] = useState<number | null>(
    null,
  );

  const handleNoticeEditItem = (id: number) => {
    setNoticeEditingItem((prev) => (prev === id ? null : id));
  };

  const handleNoticeReset = () => {
    setNoticeEditingItem(null);
  };

  return (
    <NoticeCommentsContext.Provider
      value={{ noticeEditingItem, handleNoticeEditItem, handleNoticeReset }}
    >
      {children}
    </NoticeCommentsContext.Provider>
  );
};
