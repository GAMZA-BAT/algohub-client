import { atom } from "jotai";

type Auth = {
  isLoggedIn: boolean;
};

export const authAtom = atom<Auth>({ isLoggedIn: false });
