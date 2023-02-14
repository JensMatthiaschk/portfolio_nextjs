import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <script
  dangerouslySetInnerHTML={{
    __html: `
    document.body.classList.add(
      window.localStorage.getItem('theme') + '-theme'
    )
  `
  }}
/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
