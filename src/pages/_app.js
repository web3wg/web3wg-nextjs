import "@styles/base/bootstrap-4.4.1.css";
import BaseStyle from '@styles/index';

export default function App({ Component, pageProps }) {
  return (
    <>
      <BaseStyle />
      <Component {...pageProps} />
    </>
  );
}
