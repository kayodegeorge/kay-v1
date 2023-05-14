import "./globals.css";
import { neueMontreal } from "./styles/fonts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Abdulazeez Portfolio",
  description: "Welcome to my world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={neueMontreal.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
