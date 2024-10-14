import { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import "../../i18n";

import { Analytics } from "@vercel/analytics/react";

import Application from "./page";

export const metadata: Metadata = {
  title: "Gabriel Castro",
  description: "Gabriel Castro Dev",
};

const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="bg-zinc-100 overflow-x-hidden overflow-y-auto"
    >
      <body className={`${quicksand.className} h-screen w-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Application />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
