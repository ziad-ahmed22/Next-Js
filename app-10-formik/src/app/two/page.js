"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "../page.module.css";
import { useEffect } from "react";

// On Click
// password match

export default function Two() {
  const EMAIL_REGX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passErr = (str) => `Must Have At leaset 1 ${str}`;

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email Is Required")
      .email("Invalid Email Address"),
    // .matches(EMAIL_REGX, "Invalid Email Address"),

    phone: Yup.number()
      .min(11, "Minimum Length 11")
      .max(11, "Maximum Length 11"),

    password: Yup.string()
      .required("Password Is Required")
      .min(4, "Min Length 4")
      .max(8, "Max Length 8")
      .matches(/[0-9]/, passErr("digits"))
      .matches(/[a-z]/, passErr("lower case"))
      .matches(/[A-Z]/, passErr("upper case")),

    repassword: Yup.string()
      .required("Password Is Required")
      .oneOf([Yup.ref("password")], "Do Not Match"),
  });

  const { handleSubmit, values, handleChange, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        email: "",
        phone: "",
        password: "",
        repassword: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: schema,
    });

  //   useEffect(() => {
  //     if (Object.keys(errors).length > 0 && errors.email) {
  //       console.log("sssssssssss");
  //     }
  //     console.log("values", values);
  //     console.log("errors", errors);
  //   }, [values, errors]);

  //   useEffect(() => {
  //     if (!values.email) {
  //     setFieldValue("email", "asd@asd.asd");
  //     }
  //   }, []);

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
            autoComplete="off"
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

        {/* RePassword */}
        <div>
          <input
            type="password"
            placeholder="REPEATE PASSWORD"
            name="repassword"
            onChange={handleChange}
            value={values["repassword"]}
          />
          {touched["repassword"] && errors["repassword"] && (
            <p className={styles.error}>{errors.repassword}</p>
          )}
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </main>
  );
}
