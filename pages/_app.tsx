import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';

import '../styles/globals.css';
import { lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
