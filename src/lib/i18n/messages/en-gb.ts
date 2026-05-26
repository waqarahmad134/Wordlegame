import type { Dictionary } from "./types";
import { en } from "./en";

// British English: identical to US English with localized spellings.
export const enGb: Dictionary = {
  ...en,
  settings: {
    ...en.settings,
    colorblind: "Colour Blind Mode",
    colorblindDesc: "High contrast colours",
  },
};
