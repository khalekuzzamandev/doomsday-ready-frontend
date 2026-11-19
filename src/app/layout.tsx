import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";



export const metadata: Metadata = {
  title: "DOOMSDAY-READY | Movie Rewatch & Booking",
  description: "Plan your ultimate MCU rewatch journey, track watched movies, and book your opening- night watch party",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
