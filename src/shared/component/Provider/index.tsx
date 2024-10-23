"use client";

import { Provider } from "jotai";
import type { PropsWithChildren } from "react";

type ProviderProps = PropsWithChildren;

/**
 * https://jotai.org/docs/core/store
 * store을 생성하여 Provider의 store prop으로 전달하여 Context 대신 사용 가능
 */

const Providers = ({ children }: ProviderProps) => {
  return <Provider>{children}</Provider>;
};

export default Providers;
