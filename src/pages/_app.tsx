import { AuthProvider } from "../context/AuthContext";
import "../ui/utils.scss";
import Head from "next/head";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return (
    <>
      {" "}
      <Head>
        <title>EstiMate Dev</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <main>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </main>
    </>
  );
}

export default MyApp;
