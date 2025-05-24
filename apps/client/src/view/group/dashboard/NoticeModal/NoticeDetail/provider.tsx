import { type ReactNode, createContext, useState } from "react";

type Context = {
  noticeEditingItem: number | null;
  handleNoticeEditItem: (id: number) => void;
  handleNoticeReset: () => void;
  noticeId: number;
};

export const NoticeCommentsContext = createContext<Context>({} as Context);

export const NoticeCommentsProvider = ({
  children,
  noticeId,
}: { children: ReactNode; noticeId: number }) => {
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
      value={{
        noticeEditingItem,
        handleNoticeEditItem,
        handleNoticeReset,
        noticeId,
      }}
    >
      {children}
    </NoticeCommentsContext.Provider>
  );
};
