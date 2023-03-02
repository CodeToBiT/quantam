import "../../styles/globals.scss";
import { SSRProvider } from "react-bootstrap";
import NavigationBar from "../components/header/NavigationBar";
import Footer from "../components/footer/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <NavigationBar />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </>
  );
}
