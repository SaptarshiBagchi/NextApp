import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-gray-100 w-screen p-10 h-screen flex">
      <div className="lg:fixed md:relative bg-white h-screen lg:w-52">
        <Link href="/about" className="relative top-5 left-5">
          <button className="rounded-md bg-blue-700 text-white px-4 py-2 m-7">
            About us
          </button>
        </Link>
      </div>
      <div className="relative lg:w-4/5 p-5 sm:w-full bg-white h-48 ml-52 rounded-md shadow-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
        >
          <h1 className="font-semibold text-lg">This is a sample text</h1>
          <p className="text-sm my-2">And this is a sample document</p>
        </motion.div>
      </div>
    </div>
  );
}
