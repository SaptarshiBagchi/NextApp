import { useState } from "react";
import HomeStyle from "../styles/Home.module.css";
import { motion } from "framer-motion";
export default function about() {
  const [input, setInput] = useState("This is the first input");

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      className={HomeStyle.main}
    >
      <div className={HomeStyle.card}>
        <h1>This is the sample input of this page</h1>
        <p>{input}</p>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
    </motion.div>
  );
}
