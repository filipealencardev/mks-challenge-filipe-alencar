import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface GlobalContextData {
  setSizeScreen: Dispatch<SetStateAction<{ width: number; height: number }>>;
  sizeScreen: { width: number; height: number };
}

interface GlobalProps {
  children: ReactNode;
}

interface DuelOpponent {
  opponentOne: TypeOpponent;
  opponentTwo: TypeOpponent;
  duelConfirmed: boolean;
}

type TypeOpponent = { id: number | undefined; name: string | undefined };

type Mode = "list" | "duel";

export const GlobalContext = createContext({} as GlobalContextData);

export const GlobalContextProvider = ({ children }: GlobalProps) => {
  const [sizeScreen, setSizeScreen] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window === "object" ? window.innerWidth : 0,
    height: typeof window === "object" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("resize", () =>
        setSizeScreen({ width: window.innerWidth, height: window.innerHeight })
      );

      return () => {
        window.removeEventListener("resize", () =>
          setSizeScreen({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        );
      };
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        setSizeScreen,
        sizeScreen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
