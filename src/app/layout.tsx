import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header.component";
import { Social } from "../components/social.component";
import { FooterComponent } from "../components/footer.component";
import "./metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Castro",
  description: "Gabriel Castro Dev",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-bodyBackground overflow-x-hidden overflow-y-auto"
    >
      <body className={inter.className}>
        <main className="relative flex min-h-screen min-w-screen h-full w-full flex-col items-center">
          <Header />
          <div>
            <div className="absolute bottom-0 left-0 ml-6 mb-10 hidden md:block">
              <Social />
            </div>
            {children}
            <div className="absolute bottom-0 right-0 mb-6 mr-6 hidden md:block">
              <FooterComponent />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
