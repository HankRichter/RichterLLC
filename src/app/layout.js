import { Space_Grotesk, Work_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Richter's LLC",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${workSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
