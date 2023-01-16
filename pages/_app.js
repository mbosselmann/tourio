import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "../components/Layout.js";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
