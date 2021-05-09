import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
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
      console.log("username is blank actually");
      generatedErrors.username = "Username cannot be empty";
    }

    if (fields.password.length === 0)
      generatedErrors.password = "Password cannot be empty";
    if (generatedErrors === {}) {
      setErrors(generatedErrors);
      return;
    }

    router.replace("/about");
  };

  return (
    <div className="w-full h-screen">
      <Form
        onSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
        fields={fields}
        setFields={setFields}
      />
    </div>
  );
}
