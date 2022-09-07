import type { AppProps } from 'next/app';

import ProviderTheme from '../src/contexts/Theme';
import ProviderButtonNavbar from '../src/contexts/ButtonNavbar';
import GlobalStyles from '../styles/globals';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderTheme>
      <ProviderButtonNavbar>
        <Component {...pageProps} />
        <GlobalStyles />
      </ProviderButtonNavbar>
    </ProviderTheme>
  )
}