import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeContextProvider from "@/components/ThemeContext.jsx"
import { appWithTranslation } from 'next-i18next'



function App ({ Component, pageProps }: AppProps){
  return (
    <ThemeContextProvider>
  <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default appWithTranslation(App)
