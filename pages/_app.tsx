import type { AppProps } from 'next/app';

import ProviderTheme from '../src/contexts/Theme';
import GlobalStyled from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ProviderTheme>
        <Component {...pageProps} />
        <GlobalStyled />
    </ProviderTheme>
  )
}

export default MyApp