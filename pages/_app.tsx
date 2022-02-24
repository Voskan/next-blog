import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Мой блог</title>
        <meta name="description" content="Мета описание блога" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
