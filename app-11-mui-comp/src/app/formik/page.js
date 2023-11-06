"use client";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import RadioButtonsGroup from "../components/RadioButtonGroup/RadioButtonGroup";
import InputField from "../components/InputField/InputField";
import DropDown from "../components/DropDown/DropDown";
import Button from "../components/MainButton/Button";
import Select from "../components/Select/Select";

import { useFormik } from "formik";
import * as Yup from "yup";

import "../page.scss";

const selectOptions = [
  { id: 1, label: "male" },
  { id: 2, label: "female" },
];

const favOptions = [
  { id: 1, label: "eating" },
  { id: 2, label: "swimming" },
  { id: 3, label: "playing" },
  { id: 4, label: "pooling" },
];

const radioOptions = [
  { id: 1, label: "eating" },
  { id: 2, label: "swimming" },
  { id: 3, label: "playing", disabled: true },
  { id: 4, label: "pooling" },
];

const dropDownOptions = [
  { id: 1, label: "My Account" },
  { id: 2, label: "My Subscribtions" },
  { id: 3, label: "playing", disabled: true },
  { id: 4, label: "Logout" },
];

const EMAIL_REGX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Home() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Name Is Required")
      .min(3, "Minumum 3")
      .max(12, "Maximum 12"),

    email: Yup.string()
      .required("Email Is Required")
      .email("Invalid Email Address"),
    //   .matches(EMAIL_REGX, "Invalid Email Address"),

    password: Yup.string()
      .required("Password Is Required")
      .min(4, "Min Length 4")
      .max(8, "Max Length 8"),

    repassword: Yup.string()
      .required("Password Is Required")
      .oneOf([Yup.ref("password")], "Do Not Match"),

    gender: Yup.string().required("Gender Is Required"),

    fav: Yup.array().min(1, "Fav Is Required"),

    radio: Yup.string().required("Radio Is Required"),

    dropdown: Yup.string().required("DropDown Is Required"),
  });

  const {
    handleSubmit,
    values,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      gender: "",
      fav: [],
      radio: "",
      dropdown: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schema,
  });

  return (
    <div className="con">
      <form onSubmit={handleSubmit}>
        {/* ******************* Name ******************* */}
        <InputField
          name="name"
          type="text"
          label="Name"
          //   OLD
          //   value={name}
          //   onChange={(val) => {
          //     setName(val);
          //   }}

          //   ON CHANGE
          //   value={values["name"]}
          //   onChange={(val) => {
          //     setFieldTouched("name");
          //     setFieldValue("name", val);
          //   }}

          // ON BLUR
          value={values["name"]}
          onChange={(val) => setFieldValue("name", val)}
          onBlur={() => setFieldTouched("name")}
          //
          // ERROR
          isInputHasErr={!!(touched["name"] && errors["name"])}
          errMsg={errors["name"]}
        />

        {/* ******************* Email ******************* */}
        <InputField
          name="email"
          type="email"
          label="Email"
          endAdornment={<AlternateEmailIcon />}
          //   OLD
          //   value={email}
          //   onChange={(val) => {
          //     setEmail(val);
          //   }}

          value={values["email"]}
          onChange={(val) => {
            setFieldTouched("email");
            setFieldValue("email", val);
          }}
          isInputHasErr={!!(touched["email"] && errors["email"])}
          errMsg={errors["email"]}
        />

        {/* ******************* Password ******************* */}
        <InputField
          name="password"
          type="password"
          label="Password"
          //   OLD
          //   value={password}
          //   onChange={(val) => {
          //     setPassword(val);
          //   }}

          value={values["password"]}
          onChange={(val) => {
            setFieldTouched("password");
            setFieldValue("password", val);
          }}
          isInputHasErr={!!(touched["password"] && errors["password"])}
          errMsg={errors["password"]}
        />

        {/* ******************* Re Password ******************* */}
        <InputField
          name="repassword"
          type="password"
          label="Re Password"
          //   OLD
          //   value={rePassword}
          //   onChange={(val) => {
          //     setRePassword(val);
          //   }}

          value={values["repassword"]}
          onChange={(val) => {
            setFieldTouched("repassword");
            setFieldValue("repassword", val);
          }}
          isInputHasErr={!!(touched["repassword"] && errors["repassword"])}
          errMsg={errors["repassword"]}
        />

        {/* ******************* Select ******************* */}
        <Select
          name="gender"
          label="Gender"
          options={selectOptions}
          placeholder="Gender"
          popupIcon={<ArrowDropDownCircleIcon />}
          //   OLD
          //   value={selectOptions.find((option) => option.id == gender) || null}
          //   onChange={(value) => {
          //     setGender(value ? value.id : "");
          //   }}

          value={
            selectOptions.find((option) => option.id == values["gender"]) ||
            null
          }
          onChange={(value) => {
            setFieldTouched("gender");
            setFieldValue("gender", value ? value.id : "");
          }}
          hasError={!!(touched["gender"] && errors["gender"])}
          errMsg={errors["gender"]}
        />

        {/* ******************* Multiple Select ******************* */}
        <Select
          name="fav"
          label="Favorites"
          options={favOptions}
          placeholder="Favorites"
          multiple={true}
          //   OLD
          //   value={fav}
          //   onChange={(value) => {
          //     setFav(value);
          //   }}

          value={values["fav"]}
          onChange={(value) => {
            setFieldTouched("fav");
            setFieldValue("fav", value);
          }}
          hasError={!!(touched["fav"] && errors["fav"])}
          errMsg={errors["fav"]}
        />

        {/* ******************* Radio Btn ******************* */}
        <RadioButtonsGroup
          label="ٌRadios"
          id="radio"
          name="radio"
          listOfRadios={radioOptions}
          //   OLD
          //   value={radioVal}
          //   onChange={(val) => {
          //     setRadioVal(val);
          //   }}

          value={values["radio"]}
          onChange={(value) => {
            setFieldTouched("radio");
            setFieldValue("radio", value);
          }}
          hasError={!!(touched["radio"] && errors["radio"])}
          errMsg={errors["radio"]}
        />

        {/* ******************* DropDown ******************* */}
        <DropDown
          name="dropdown"
          label="DropDown"
          renderLabel={dropDownOptions[0].label}
          options={dropDownOptions}
          //   OLD
          //   value={dropDownVal}
          //   onChange={(val) => {
          //     setDropDwonVal(val);
          //   }}

          value={values["dropdown"]}
          onChange={(value) => {
            setFieldTouched("dropdown");
            setFieldValue("dropdown", value);
          }}
          hasError={!!(touched["dropdown"] && errors["dropdown"])}
          errMsg={errors["dropdown"]}
        />

        {/* ******************* Button ******************* */}
        <Button
          label="Submit"
          type="submit"
          fullWidth
          //   disabled={!dirty || !isValid}
        />
      </form>
    </div>
  );
}
