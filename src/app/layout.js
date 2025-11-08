import { Bai_Jamjuree, Inter } from "next/font/google";
import "./globals.scss";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const notosans = Inter({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Poppabubble Store",
  description: "The official Poppabubble online store. Explore our unique range of handmade bubble teas, exclusive products, games, and merchandise. Enjoy fast shipping and special offers on your favorite treats!",
  icons: {
    icon: '/images/logo.png', // Path relative to the public directory
    apple: '/images/logo.png', // For Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.variable} ${notosans.variable}`}>
        {children}
      </body>
    </html>
  );
}
