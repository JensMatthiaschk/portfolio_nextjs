import Head from 'next/head'
import Navbar from '../components/Navbar.jsx'
import Experience from './Experience.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import ClientOnly from '../components/ClientOnly.jsx'


export default function Home({props}:{ props:any }) {
  return (
    <>
      <Head>
      </Head>
      <main className='h-full overflow-hidden'>
        <ClientOnly>
          <Navbar />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </ClientOnly>
      </main>
    </>
  )
}
