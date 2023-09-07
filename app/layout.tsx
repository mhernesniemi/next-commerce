import Footer from "components/layout/footer";
import Navbar from "components/layout/navbar";
import { Inter } from "next/font/google";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const { SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-100 text-black selection:bg-teal-300">
        <Navbar />
        <Suspense>
          <main className="mx-auto max-w-screen-xl">{children}</main>
        </Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
