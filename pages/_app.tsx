import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeContextProvider from "@/components/ThemeContext.jsx"
// import {Suspense} from 'react'
import { appWithTranslation } from 'next-i18next'
// import Loader from '@/components/Loader.jsx'



function App ({ Component, pageProps }: AppProps){
  return (
  // <Suspense fallback={<Loader/>}>
    <ThemeContextProvider>
  <Component {...pageProps} />
    </ThemeContextProvider>
  // </Suspense>
  )
}

export default appWithTranslation(App)
