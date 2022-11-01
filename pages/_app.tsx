import type { AppProps } from 'next/app';

import ProviderTheme from '../src/contexts/Theme';
import ProviderButtonNavbar from '../src/contexts/ButtonNavbar';
import ProviderModalMessage from '../src/contexts/ModalMessage';
import ProviderUsers from '../src/contexts/Users';
import ProviderHelp from '../src/contexts/Help';

import { ModalMessage } from '../src/components/ModalMessage';

import GlobalStyles from '../styles/globals';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderTheme>
      <ProviderButtonNavbar>
        <ProviderHelp>
          <ProviderUsers>
            <ProviderModalMessage>
              <Component {...pageProps} />
              <ModalMessage />
              <GlobalStyles />
            </ProviderModalMessage>
          </ProviderUsers>
        </ProviderHelp>
      </ProviderButtonNavbar>
    </ProviderTheme>
  )
}