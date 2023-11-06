"use client";
import { useFormik } from "formik";
import styles from "../page.module.css";

export default function One() {
  const { handleSubmit, values, handleChange } = useFormik({
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
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="EMAIL"
            name="email"
            onChange={handleChange}
            value={values["email"]}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="PASSWORD"
            name="password"
            onChange={handleChange}
            value={values["password"]}
          />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </main>
  );
}
