import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Experience from './Experience.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import ClientOnly from '../components/ClientOnly.jsx';
import '../services/i18n.js' //initializing i18n


export default function Home({ props }: { props: any }) {


  const [otherProjectsVisible, setOtherProjectsVisible] = useState(false);

  return (
    <>
      {/* <Head>
      </Head> */}
      <main className='h-full overflow-hidden'>
        <ClientOnly>
          <Navbar />
          <About />
          <Experience setOtherProjectsVisible={setOtherProjectsVisible} />
          <Projects otherProjectsVisible={otherProjectsVisible} setOtherProjectsVisible={setOtherProjectsVisible} />
          <Contact />
        </ClientOnly>
      </main>
    </>
  )
}
