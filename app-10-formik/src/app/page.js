"use client";
import { useFormik } from "formik";
import styles from "./page.module.css";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main className={styles.main}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="EMAIL"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="PASSWORD"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </main>
  );
}
