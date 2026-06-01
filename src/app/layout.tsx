import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} - Daily Word Puzzle`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Play Wordle online for free. Guess the hidden word in 6 tries with a new daily puzzle, unlimited mode, word lengths from 4 to 11, custom games, multiplayer and more.",
  keywords: [
    "wordle",
    "wordle unlimited",
    "word game",
    "daily word puzzle",
    "wordle solver",
    "sedecordle",
    "wordle multiplayer",
  ],
};

// Applied before paint to prevent a theme flash on first load.
const themeBootstrap = `
(function(){try{
  var s=JSON.parse(localStorage.getItem('wg:settings')||'{}');
  var prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  var dark=s.theme==='dark'||((s.theme==='system'||!s.theme)&&prefersDark);
  if(dark)document.documentElement.classList.add('dark');
  if(s.colorblind)document.documentElement.classList.add('colorblind');
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
