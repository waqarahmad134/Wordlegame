"use client";

import { SettingsProvider } from "@/components/settings/SettingsProvider";
import { HelpModal } from "@/components/modals/HelpModal";
import { SettingsModal } from "@/components/modals/SettingsModal";
import { StatsModal } from "@/components/modals/StatsModal";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UIProvider, useUI } from "./ui-context";

function Modals() {
  const { modal } = useUI();
  return (
    <>
      {modal === "help" && <HelpModal />}
      {modal === "stats" && <StatsModal />}
      {modal === "settings" && <SettingsModal />}
    </>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <UIProvider>
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <Modals />
      </UIProvider>
    </SettingsProvider>
  );
}
