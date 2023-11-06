"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "../page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Autocomplete,
  FilledInput,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

// react MUI

export default function SixMui() {
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

    repassword: Yup.string()
      .required("Password Is Required")
      .oneOf([Yup.ref("password")], "Do Not Match"),

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
      repassword: "",
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

  const checkError = (name) => {
    return touched[name] && errors[name];
  };

  const [showPassword, setShowPassword] = useState(false);

  const selectOptions = [
    { id: 1, name: "male" },
    { id: 2, name: "female" },
  ];

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        {/* ******************* EMAIL ******************* */}
        <>
          <FilledInput
            type="email"
            className="w-100"
            placeholder="EMAIL"
            name="email"
            value={values["email"]}
            //
            onChange={handleChange}
            onBlur={() => setFieldTouched("email")}
            //
            // onChange={(e) => {
            //   setFieldTouched("email");
            //   setFieldValue("email", e.target.value);
            // }}
            //
            // onChange={onChangeHandler}

            error={!!checkError("email")}
          />
          <FormHelperText error={!!checkError("email")}>
            {checkError("email") && errors.email}
          </FormHelperText>
        </>

        {/* ******************* PHONE ******************* */}
        <>
          <FilledInput
            type="text"
            className="w-100"
            placeholder="PHONE"
            name="phone"
            value={values["phone"]}
            // onChange={(e) => {
            //   setFieldTouched("phone");
            //   setFieldValue("phone", e.target.value);
            // }}
            onChange={onChangeHandler}
            error={!!checkError("phone")}
          />
          <FormHelperText error={!!checkError("phone")}>
            {checkError("phone") && errors.phone}
          </FormHelperText>
        </>

        {/* ******************* PASSWORD ******************* */}
        <>
          <FilledInput
            type={showPassword ? "text" : "password"}
            className="w-100"
            placeholder="PASSWORD"
            name="password"
            value={values["password"]}
            // onChange={(e) => {
            //   setFieldTouched("password");
            //   setFieldValue("password", e.target.value);
            // }}
            onChange={onChangeHandler}
            error={!!checkError("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error={!!checkError("password")}>
            {checkError("password") && errors.password}
          </FormHelperText>
        </>

        {/* ******************* REPASSWORD ******************* */}
        <>
          <FilledInput
            type={showPassword ? "text" : "password"}
            className="w-100"
            placeholder="REPASSWORD"
            name="repassword"
            value={values["repassword"]}
            // onChange={(e) => {
            //   setFieldTouched("repassword");
            //   setFieldValue("repassword", e.target.value);
            // }}
            onChange={onChangeHandler}
            error={!!checkError("repassword")}
          />
          <FormHelperText error={!!checkError("repassword")}>
            {checkError("repassword") && errors.repassword}
          </FormHelperText>
        </>

        {/* ******************* SELECT ******************* */}
        <div>
          <Autocomplete
            className={`${!!checkError("gender") ? "error-border" : ""}`}
            name="gender"
            options={selectOptions}
            getOptionLabel={(option) => option.name || ""}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            )}
            isOptionEqualToValue={(option, value) => option.id == value.id}
            noOptionsText="Text Not Found"
            onChange={(_, value) => {
              setFieldTouched("gender");
              setFieldValue("gender", value ? value.id : "");
            }}
            value={
              selectOptions.find((option) => option.id == values["gender"]) ||
              null
            }
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Chose Gender"
                error={!!checkError("gender")}
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
          />
          <FormHelperText error={!!checkError("gender")}>
            {checkError("gender") && errors.gender}
          </FormHelperText>
        </div>

        {/********************* BUTTON *********************/}
        <div>
          <input
            type="submit"
            value="Submit"
            // disabled={!dirty || !isValid} //
          />
        </div>
      </form>
    </main>
  );
}
