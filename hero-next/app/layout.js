// Layout => sagle pages cha common dhancha (fonts, page title ityadi)
import { Unbounded, DM_Sans } from "next/font/google"; // Google fonts
import "./globals.css";

// headline sathi font (Unbounded) ani baki text sathi (DM Sans)
const display = Unbounded({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

// browser tab madhe disnara title
export const metadata = {
  title: "Welcome ItZ Fizz",
  description: "Scroll-driven hero section animation built with Next.js, Tailwind and GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      {/* bg-bg = halka nila-pandhra background, overflow-x-hidden = baju la scroll nako */}
      <body className="overflow-x-hidden bg-bg font-body text-navy">{children}</body>
    </html>
  );
}
