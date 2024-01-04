import { Inter } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SKIN by todofix",
  description:
    "Todofix Skin - Beautiful design and cover for your smartphone device or laptop in alipurduar west bengal, all over India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/tdf-ico.png" />
      </head>
      <body className={josefin_sans.className}>{children}</body>
    </html>
  );
}
