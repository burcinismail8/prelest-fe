import type { Metadata } from "next";
import { Geist_Mono, Yeseva_One } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const yesevaOne = Yeseva_One({
  variable: "--font-yeseva-one",
  weight: "400",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Прелест | Резервирай час за красота в Асеновград",
  description:
    "Открий най-добрите фризьори, маникюристи и козметици в Асеновград. Резервирай своя час онлайн бързо и лесно.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${yesevaOne.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
