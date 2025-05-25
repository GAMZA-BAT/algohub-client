import type { ToastOption } from "@/common/component/Toast/type";
import { atom } from "jotai";

type ToastAtom = {
  toast: ToastOption | null;
};

export const toastAtom = atom<ToastAtom>({
  toast: null,
});
