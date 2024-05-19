import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStyles } from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <GlobalStyles />
    </>
  );
}

export default MyApp;
