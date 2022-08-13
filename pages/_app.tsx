import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import GlobalStyled from '../styles/globals';
import { parseCookies } from 'nookies';

function MyApp({ Component, pageProps }: AppProps) {


  const [ theme, setTheme ] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);

    console.log('moj')
  }
console.log(theme)
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} toggleTheme={toggleTheme} title={theme.title} />
        <GlobalStyled />
      </ThemeProvider>
  )
}

export default MyApp