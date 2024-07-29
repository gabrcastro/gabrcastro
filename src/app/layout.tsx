import { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import { Header } from "../components/header.component";
import { Social } from "../components/social.component";
import { FooterComponent } from "../components/footer.component";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Castro",
  description: "Gabriel Castro Dev",
};

const inter = Inter({ subsets: ["latin"] });
const chakra_petch = Chakra_Petch({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-50 overflow-x-hidden overflow-y-auto">
      <body className={chakra_petch.className}>
        <main className="flex h-full flex-col items-center">
          <Header />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
