import ToastProvider from "@/common/component/Toast";
import "@/styles/globalStyles.css";
import {
  AppRouterContext,
  type AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { FC } from "react";
import "react-datepicker/dist/react-datepicker.css";

const decorators = (Story: FC) => {
  document.querySelector("html")!.style.fontSize = "10px";
  return (
    <AppRouterContext.Provider value={{} as AppRouterInstance}>
      <ToastProvider />
      <Story />
    </AppRouterContext.Provider>
  );
};

export default decorators;
