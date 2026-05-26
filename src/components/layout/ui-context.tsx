"use client";

import { createContext, useContext, useState } from "react";

export type ModalName = "help" | "stats" | "settings" | null;

interface UIValue {
  modal: ModalName;
  openModal: (name: ModalName) => void;
  closeModal: () => void;
  /** Word length of the board currently in view (drives the Stats modal). */
  activeLength: number;
  setActiveLength: (n: number) => void;
}

const UIContext = createContext<UIValue | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalName>(null);
  const [activeLength, setActiveLength] = useState(5);
  return (
    <UIContext.Provider
      value={{
        modal,
        openModal: setModal,
        closeModal: () => setModal(null),
        activeLength,
        setActiveLength,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI(): UIValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
