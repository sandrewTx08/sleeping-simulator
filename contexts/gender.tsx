import { Dispatch, createContext, useState } from "react";

export enum Gender {
  MALE,
  FEMALE,
}

type State = Gender;

export const Context = createContext<[State, Dispatch<State>]>(null);

export default function Provider({ children }: React.PropsWithChildren) {
  const state = useState<State>();

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
