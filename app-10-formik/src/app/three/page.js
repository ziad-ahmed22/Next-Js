"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "../page.module.css";
import { useEffect } from "react";

// check email in database
//  => onsubmit
//  => Yup using test('', func())

const emails = ["asd@asd.asd", "ali@gmail.com", "medo@dd.as"];

export default function Three() {
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
      if (emails.find((email) => email === values["email"])) {
        setFieldError("email", "Email Is Already Exist");
      }
    },
    validationSchema: schema,
  });

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div>
          <input
            type="text"
            placeholder="EMAIL"
            name="email"
            onChange={handleChange}
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
            onChange={handleChange}
            value={values["phone"]}
          />
          {touched["phone"] && errors["phone"] && (
            <p className={styles.error}>{errors.phone}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="PASSWORD"
            name="password"
            onChange={handleChange}
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
