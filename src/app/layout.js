import { Manrope } from "next/font/google";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "Family Friends",
  description: "Browse a list of breeds, view pictures, and learn about each dog’s size, personality, activity level, and care needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col px-5">
        <Header />
        <main className="flex-1">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
