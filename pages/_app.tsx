import { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";
const background = "/background.jpg";
import "normalize.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: "Noto Sans JP", sans-serif;
          padding: 0 12px;
          color: #f0f0f0;
          background: linear-gradient(0deg, #36253f 5%, #000000 100%);
        }
      `}</style>
    </Layout>
  );
}

export default MyApp;
