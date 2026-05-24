import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import "./globals.css";

export const metadata = {
  title: "Richter LLC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
