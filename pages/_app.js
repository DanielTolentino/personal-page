import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { NextIntlProvider } from "next-intl";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
      <Analytics />
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../lang/${locale}.json`)).default,
    },
  };
}
export default MyApp;
