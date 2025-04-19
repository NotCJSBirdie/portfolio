import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Carl Serquina - Cosmic Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}
