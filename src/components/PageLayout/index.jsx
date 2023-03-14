import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";

export default function PageLayout({
  title = "Web3 Working Group",
  darkHeader = false,
  stickyHeader = false,
  transparentHeader = false,
  staticBottom = false,
  children
}) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <title>{title + " | Web3WG"}</title>
      </Head>
      <Header
        darkHeader={darkHeader}
        stickyHeader={stickyHeader}
        transparentHeader={transparentHeader}
      />
      <main>{children}</main>
      <Footer staticBottom={staticBottom} />
    </>
  );
}