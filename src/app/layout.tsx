import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const eurostile = localFont({
//   variable: "--font-eurostile",
//   src: [
//     {
//       path: "./fonts/eurostile.woff",
//       weight: "100",
//       style: "normal",
//     },
//   ],
// });

const extendedEurostileBlack = localFont({
  src: "./fonts/extended-semibold.ttf",
  variable: "--font-eurostile",
});

export const metadata: Metadata = {
  title: "JsJam Construction",
  description: "Quality Construction Meets Cutting-Edge Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${extendedEurostileBlack.variable} antialiased max-w-[1024px] mx-auto p-8 md:p-16 bg-grid-small-black/30`}
      >
        {children}
      </body>
    </html>
  );
}
