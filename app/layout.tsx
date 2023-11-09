import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hy-vee | Factoid",
  description: "Get your Cat facts and Dog pics in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-all duration-300 ease-linear bg-gray-100 dark:bg-neutral-900 text-neutral-700 dark:text-gray-200">
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
