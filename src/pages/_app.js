import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";
import { Outfit } from '@next/font/google';

const outfit = Outfit({ weight: ['500'], subsets: ['latin'] });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <main className={outfit.className}>
      <NextNProgress />
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Analytics />
      </SessionProvider>
    </main>
  );
}
