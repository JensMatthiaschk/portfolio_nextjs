import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeContextProvider from "@/components/ThemeContext.jsx"
import { appWithTranslation } from 'next-i18next'
import {Montserrat, Puritan, Sarala} from "@next/font/google"

const montserrat = Montserrat({
  subsets: ['latin'],
variable: "--font-montserrat",
})

const sarala = Sarala({
  subsets: ['latin'],
  weight: ["400" , "700"],
variable: "--font-sarala"
})

function App ({ Component, pageProps }: AppProps){
  return (
    <div className={`${montserrat.variable} ${sarala.variable} font-Sarala`}>
    <ThemeContextProvider>
  <Component {...pageProps} />
    </ThemeContextProvider>
    </div>
  )
}

export default appWithTranslation(App)
