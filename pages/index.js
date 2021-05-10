import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Form from "../components/Form";

export default function Home() {
  const router = useRouter();
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let generatedErrors = {};
    //console.log(`${fields.username.length} and ${fields.password.length}`);
    if (fields.username.length === 0) {
      // console.log("username is blank actually");
      generatedErrors = {
        ...generatedErrors,
        username: "Username cannot be empty",
      };
    }

    if (fields.password.length === 0)
      generatedErrors = {
        ...generatedErrors,
        password: "Password cannot be empty",
      };
    console.log(generatedErrors);
    if (JSON.stringify(generatedErrors) === "{}") {
      sessionStorage.setItem("username", fields.username);
      sessionStorage.setItem("password", fields.password);
      router.push("/about");
    }

    setErrors(generatedErrors);
  };
  useEffect(() => {
    if (sessionStorage.getItem("username")) router.replace("/about");
  }, []);
  return (
    <motion.div
      initial={false}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      className="w-full h-screen"
    >
      <Form
        onSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
        fields={fields}
        setFields={setFields}
      />
    </motion.div>
  );
}
