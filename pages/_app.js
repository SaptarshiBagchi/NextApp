import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
