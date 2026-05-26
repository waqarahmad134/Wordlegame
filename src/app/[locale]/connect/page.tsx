import type { Metadata } from "next";
import { Connect } from "@/components/games/Connect";

export const metadata: Metadata = {
  title: "Connect",
  description: "Group sixteen words into four hidden categories.",
};

export default function ConnectPage() {
  return <Connect />;
}
