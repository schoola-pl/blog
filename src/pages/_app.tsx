import MainTemplate from '../components/templates/MainTemplate';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainTemplate>
      <Component {...pageProps} />;
    </MainTemplate>
  );
}

export default MyApp;
