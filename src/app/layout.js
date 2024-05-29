import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navabar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Studio",
  description: "studion ui project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </div>
        </body>
    </html>
  );
}
