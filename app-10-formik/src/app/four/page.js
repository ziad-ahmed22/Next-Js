"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "../page.module.css";
import { useEffect } from "react";

export default function Two() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email Is Required"),

    phone: Yup.number()
      .min(11, "Minimum Length 11")
      .max(11, "Maximum Length 11"),

    password: Yup.string()
      .required("Password Is Required")
      .min(4, "Min Length 4")
      .max(8, "Max Length 8"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    setFieldValue,
    setFieldError,
  } = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schema,
  });

  const changeHandler = (e) => {
    handleChange(e);
    // setFieldValue(e.target.name, e.target.value);
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div>
          <input
            type="email"
            placeholder="EMAIL"
            name="email"
            onChange={changeHandler}
            value={values["email"]}
          />
          {touched["email"] && errors["email"] && (
            <p className={styles.error}>{errors.email}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            onChange={changeHandler}
            value={values["phone"]}
          />
          {touched["phone"] && errors["phone"] && (
            <p className={styles.error}>{errors.phone}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <input
            type="password"
            placeholder="PASSWORD"
            name="password"
            onChange={changeHandler}
            value={values["password"]}
          />
          {touched["password"] && errors["password"] && (
            <p className={styles.error}>{errors.password}</p>
          )}
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </main>
  );
}
