import { useState } from "react";
import HomeStyle from "../styles/Home.module.css";

export default function about() {
  const [input, setInput] = useState("This is the first input");

  return (
    <div className={HomeStyle.main}>
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
    </div>
  );
}
