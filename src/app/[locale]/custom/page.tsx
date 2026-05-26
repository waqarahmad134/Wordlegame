import type { Metadata } from "next";
import { CustomBuilder } from "@/components/game/CustomBuilder";

export const metadata: Metadata = {
  title: "Custom Wordle",
  description: "Create a custom Wordle with your own word and share it with friends.",
};

export default function CustomPage() {
  return <CustomBuilder />;
}
