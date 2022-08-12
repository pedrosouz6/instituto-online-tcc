import type { AppProps } from 'next/app';

import GlobalsStyled from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalsStyled />
    </>
  )
}

export default MyApp
