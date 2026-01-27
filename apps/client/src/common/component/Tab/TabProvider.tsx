"use client";

import type { Dispatch, PropsWithChildren, Reducer } from "react";
import { createContext, useContext, useReducer } from "react";

type Actions = { _TAG: "SetSelectedTab"; tabId: string | number };

type State = {
  variant: "primary" | "secondary";
  selectedTabId: string | number;
};

const reducer: Reducer<State, Actions> = (state: State, action: Actions) => {
  switch (action._TAG) {
    case "SetSelectedTab": {
      return {
        ...state,
        selectedTabId: action.tabId,
      };
    }
  }
};

type Context = {
  state: State;
  dispatch: Dispatch<Actions>;
} | null;

const TabContext = createContext<Context>(null);

export const useTabState = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error("tab is not context");
  }

  return context.state;
};

export const useTabDispatch = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error("tab is not context");
  }

  return context.dispatch;
};

type TabProviderProps = PropsWithChildren<{
  variant?: "primary" | "secondary";
}>;

const TabProvider = ({ variant = "primary", children }: TabProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<State, Actions>>(reducer, {
    variant,
    selectedTabId: "1",
  });

  return (
    <TabContext.Provider value={{ state, dispatch }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
