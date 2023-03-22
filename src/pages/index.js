import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import ControlSlashModal from '@/components/dust/ControlSlashModal'
import HotkeysInit from '@/components/HotkeysInit'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>JstnLT — Home</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Projects />
      <Contact />
      <Footer />

      <ControlSlashModal />
      <HotkeysInit />
    </>
  );
}