import { Dispatch, createContext, useState } from "react";

type State = number;

export const Context = createContext<[State, Dispatch<State>]>(null);

export default function Provider({ children }: React.PropsWithChildren) {
  const state = useState<State>();

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
