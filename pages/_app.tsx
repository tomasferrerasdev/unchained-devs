import type { AppProps } from 'next/app';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
