import { useRouter } from "next/router";
import { useEffect } from "react";
import "@styles/base/bootstrap-4.4.1.css";
import BaseStyle from "@styles/index";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return (
    <>
      <BaseStyle />
      <Component {...pageProps} />
    </>
  );
}
