"use client";
import { useState } from "react";
import InputField from "./components/InputField/InputField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import "./page.scss";
import Select from "./components/Select/Select";
import RadioButtonsGroup from "./components/RadioButtonGroup/RadioButtonGroup";
import SearchInput from "./components/Search/Search";
import DropDown from "./components/DropDown/DropDown";
import Button from "./components/MainButton/Button";

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

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [gender, setGender] = useState("");
  const [fav, setFav] = useState([]);
  const [radioVal, setRadioVal] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [dropDownVal, setDropDwonVal] = useState("");

  console.log("Name        => ", name);
  console.log("Email       => ", email);
  console.log("Password    => ", password);
  console.log("Re Password => ", rePassword);
  console.log("Gender      => ", gender);
  console.log("Favorite    => ", fav);
  console.log("RadioVal    => ", radioVal);
  console.log("SearchVal   => ", searchVal);
  console.log("DropDownVal => ", dropDownVal);

  return (
    <div className="con">
      {/* ******************* Name ******************* */}
      <InputField
        // inputWrapperClassName=""
        // labelClassName=""
        // inputClassName=""
        // id="name"
        name="name"
        type="text"
        label="Name"
        value={name}
        onChange={(val) => {
          setName(val);
        }}
        // onBlur={() => console.log(name)}
        placeholder="Name"
        // required
        // disabled
        // defaultValue="Ziad"
        // autoComplete="off"
        // startAdornment="st"
        // endAdornment="nd"
        // labelAdornment={"lb"}
        // inputEndAdorment={"asd"}
        // fullWidth={false}
        // multiline
        // rows={2}
        // maxRows={5}
        // minRows={3}
        // isInputHasErr={true}
        // errMsg={"error"}
        // errorClassName=""
      />

      {/* ******************* Email ******************* */}
      <InputField
        name="email"
        type="email"
        label="Email"
        value={email}
        onChange={(val) => {
          setEmail(val);
        }}
        endAdornment={<AlternateEmailIcon />}
      />

      {/* ******************* Password ******************* */}
      <InputField
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={(val) => {
          setPassword(val);
        }}
      />

      {/* ******************* Re Password ******************* */}
      <InputField
        name="repassword"
        type="password"
        label="Re Password"
        value={rePassword}
        onChange={(val) => {
          setRePassword(val);
        }}
      />

      {/* ******************* Select ******************* */}
      <Select
        // wrapperClassName=""
        // labelClassName=""
        // inputClassName=""
        // id="gender"
        name="gender"
        label="Gender"
        options={selectOptions}
        value={selectOptions.find((option) => option.id == gender) || null}
        onChange={(value) => {
          setGender(value ? value.id : "");
        }}
        placeholder="Gender"
        // required
        // disabled
        // labelAdornment="aa"
        // noOptionsText=""
        // hasError={true}
        // errMsg="Error"
        // errorClassName=""
        // disableClearable
        // popupIcon={<ArrowDropDownCircleIcon />}
      />

      {/* ******************* Multiple Select ******************* */}
      <Select
        name="fav"
        label="Favorites"
        options={favOptions}
        value={fav}
        onChange={(value) => {
          setFav(value);
        }}
        multiple={true}
        placeholder="Favorites"
      />

      {/* ******************* Radio Btn ******************* */}
      <RadioButtonsGroup
        // wrapperClassName=""
        // labelClassName=""
        // radioGroupClassName=""
        // radioClassName=""
        label="ٌRadios"
        id="radio"
        name="radio"
        listOfRadios={radioOptions}
        value={radioVal}
        onChange={(val) => {
          setRadioVal(val);
        }}
        // direction={"row"}
        // required
        // labelAdornment="s"
        // hasReplacementBody
        // replacementBody={<span>s</span>}
        // hasError={true}
        // errMsg="error"
        // errorClassName=""
      />

      {/* ******************* Search ******************* */}
      <SearchInput
        // wrapperClassName=""
        // labelClassName=""
        // inputClassName=""
        // id=""
        name="search"
        label="Search"
        value={searchVal}
        onChange={(val) => {
          setSearchVal(val);
        }}
        placeholder="Search"
        // labelAdornment={"asd"}
        // defaultValue="ali"
        // disabled
        // fullWidth
        // autoComplete="off"
      />

      {/* ******************* DropDown ******************* */}
      <DropDown
        // wrapperClassName=""
        // labelClassName=""
        // dropDownClassName=""
        // optionClassName=""
        // id=""
        name="dropdown"
        label="DropDown"
        renderLabel={dropDownOptions[0].label}
        options={dropDownOptions}
        value={dropDownVal}
        onChange={(val) => {
          setDropDwonVal(val);
        }}
        // labelAdornment="mew"
        // required
        // disabled
        // fullWidth
        // hasError
        // errMsg="error"
        // errorClassName=""
      />

      {/* ******************* Button ******************* */}
      <div style={{ display: "flex", gap: "5px" }}>
        <Button
          // btnClassName=""
          // labelClassName=""
          // type=""
          // disabled
          // outlined
          label="Contained"
          onClick={() => {}}
          fullWidth
        />

        <Button
          // btnClassName=""
          // labelClassName=""
          // type=""
          // disabled
          outlined
          label="Outlined"
          onClick={() => {}}
          fullWidth
        />
      </div>
    </div>
  );
}
