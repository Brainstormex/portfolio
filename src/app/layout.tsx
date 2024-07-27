import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { routes } from "@/lib/headerRoutes";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}`}>
        <Header routes={routes} />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
