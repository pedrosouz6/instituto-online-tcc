import type { AppProps } from 'next/app';

import ProviderTheme from '../src/contexts/Theme';
import ProviderButtonNavbar from '../src/contexts/ButtonNavbar';
import ProviderMessageModal from '../src/contexts/MessageModal';

import { MessageModal } from '../src/components/MessageModal';

import GlobalStyles from '../styles/globals';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderTheme>
      <ProviderButtonNavbar>
        <ProviderMessageModal>
          <Component {...pageProps} />
          <MessageModal />
          <GlobalStyles />
        </ProviderMessageModal>
      </ProviderButtonNavbar>
    </ProviderTheme>
  )
}