import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-2/5 h-auto px-10 py-5 mx-auto mt-32 bg-white rounded-md shadow-md">
        <h3 className="text-center font-semibold text-xl ">
          Login to continue
        </h3>
        <form onSubmit={null}>
          <div>
            <label>Username</label>
          </div>
          <input
            type="text"
            className="w-full px-4 py-2"
            placeholder="Enter your username"
          ></input>

          <div className="mt-4">
            <label>Password</label>
          </div>
          <input
            type="password"
            className="w-full px-4 py-2"
            placeholder="Enter your password"
          ></input>
        </form>
      </div>
    </div>
  );
}
