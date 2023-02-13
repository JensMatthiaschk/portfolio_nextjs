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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="I'm Jens Matthiaschk - web developer. I transitioned from the film industry to tech and am always looking for new challenges and exciting projects. This my portfolio page with an overview of my background and my so far done projects."/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/images/site.webmanifest"/>
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#b5a887"/>
        <link rel="shortcut icon" href="/images/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="msapplication-config" content="/images/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>Jens Matthiaschk | web developer</title>
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
