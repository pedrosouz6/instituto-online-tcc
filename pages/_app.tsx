import type { AppProps } from 'next/app';

import ProviderTheme from '../src/contexts/Theme';
import GlobalStyles from '../styles/globals';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderTheme>
        <Component {...pageProps} />
        <GlobalStyles />
    </ProviderTheme>
  )
}