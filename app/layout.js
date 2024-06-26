import { Inter } from "next/font/google";
import "./globals.css";
import Header from  "@Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeevanantham S",
  description: "Jeevanantham Digital Profile",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header/>
        <main>
        {children}
        </main>
        </body>
    </html>
  );
}
