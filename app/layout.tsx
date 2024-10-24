import type { Metadata } from "next";
import "@css/globals.css";
import AntDesignProvider from "@/infra/AntDesignProvider";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <body>
        <AntDesignProvider>{children}</AntDesignProvider>
      </body>
    </html>
  );
}