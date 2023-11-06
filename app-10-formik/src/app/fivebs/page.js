"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "../page.module.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// react bootstrap

export default function FiveBs() {
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

    gender: Yup.string().required("Gender Is Required"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    setFieldTouched,
    setFieldValue,
    setFieldError,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schema,
  });

  const onChangeHandler = (e) => {
    setFieldTouched(e.target.name);
    setFieldValue(e.target.name, e.target.value);
  };

  return (
    <main className={styles.main}>
      <Form onSubmit={handleSubmit}>
        {/********************* EMAIL *********************/}
        <div>
          <Form.Control
            type="email"
            placeholder="EMAIL"
            name="email"
            // onChange={handleChange} // on submit click
            // onChange={(e) => {
            //   setFieldTouched("email");
            //   setFieldValue("email", e.target.value);
            // }}
            onChange={onChangeHandler} // same as 4 line above
            value={values["email"]}
            isInvalid={errors["email"] && touched["email"]}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </div>

        {/********************* PHONE *********************/}
        <div>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            name="phone"
            // onChange={handleChange} // on submit click
            // onChange={(e) => {
            //   setFieldTouched("phone");
            //   setFieldValue("phone", e.target.value);
            // }}
            onChange={onChangeHandler} // same as 4 line above
            value={values["phone"]}
            isInvalid={errors["phone"] && touched["phone"]}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </div>

        {/********************* PASSWORD *********************/}
        <div>
          <Form.Control
            type="password"
            placeholder="PASSWORD"
            name="password"
            // onChange={handleChange} // on submit click
            // onChange={(e) => {
            //   setFieldTouched("password");
            //   setFieldValue("password", e.target.value);
            // }}
            onChange={onChangeHandler} // same as 4 line above
            value={values["password"]}
            isInvalid={errors["password"] && touched["password"]}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </div>

        {/********************* SELECT *********************/}
        <div className="mt-3">
          <Form.Select
            defaultValue={"GENDER"}
            name="gender"
            // onChange={(e) => {
            //   setFieldTouched("gender");
            //   setFieldValue("gender", e.target.value);
            // }}
            onChange={onChangeHandler}
            isInvalid={errors["gender"] && touched["gender"]}
          >
            <option disabled value="GENDER">
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.gender}
          </Form.Control.Feedback>
        </div>

        {/********************* BUTTON *********************/}
        <div>
          <input
            type="submit"
            value="Submit"
            // disabled={!dirty || !isValid} //
          />
        </div>
      </Form>
    </main>
  );
}
