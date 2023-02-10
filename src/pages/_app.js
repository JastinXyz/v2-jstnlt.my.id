import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { Outfit } from '@next/font/google';

const outfit = Outfit({ weight: ['500'], subsets: ['latin'] });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <main className={outfit.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
