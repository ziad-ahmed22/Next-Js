import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import "./InputField.scss";

const InputField = ({
  inputWrapperClassName,
  labelClassName,
  inputClassName,
  id,
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  disabled,
  autoComplete,
  defaultValue, // Use when the component is not controlled
  startAdornment,
  endAdornment,
  labelAdornment,
  inputEndAdorment,
  fullWidth,
  multiline,
  rows, // N of rows to display when multiline option is set to true.
  minRows,
  maxRows,
  isInputHasErr,
  errMsg,
  errorClassName,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`input-wrapper ${inputWrapperClassName}`}>
      <InputLabel htmlFor={id || name} className={labelClassName}>
        {label}
        {required && label && <span className="err"> *</span>}
        {labelAdornment && label && (
          <span className="ms-2">{labelAdornment}</span>
        )}
      </InputLabel>
      <>
        <FilledInput
          id={id || name}
          name={name}
          type={showPassword ? "text" : type}
          value={value || ""}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={!value && disabled ? "" : placeholder}
          required={required}
          disabled={disabled}
          error={isInputHasErr}
          fullWidth={fullWidth === false ? false : true}
          multiline={multiline}
          rows={rows}
          maxRows={maxRows}
          minRows={minRows}
          className={`${inputClassName} ${isInputHasErr ? "error-border" : ""}`}
          disableUnderline={true}
          autoComplete={autoComplete}
          startAdornment={startAdornment}
          endAdornment={
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOutlined className="" />
                  ) : (
                    <VisibilityOffOutlined className="" />
                  )}
                </IconButton>
              </InputAdornment>
            ) : (
              endAdornment
            )
          }
          {...props}
        />
        {inputEndAdorment}
      </>
      <FormHelperText
        error={isInputHasErr}
        className={`${errorClassName || "font-medium fsize-16"} ${"text-end"}`}
      >
        {isInputHasErr && errMsg}
      </FormHelperText>
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  isInputHasErr: PropTypes.bool,
  errMsg: PropTypes.string,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
  minRows: PropTypes.number,
  inputEndAdorment: PropTypes.element,
  startAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  endAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  fullWidth: PropTypes.bool,
  inputClassName: PropTypes.string,
  inputWrapperClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  labelAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
