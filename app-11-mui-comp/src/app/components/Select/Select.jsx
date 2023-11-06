import PropTypes from "prop-types";
import React from "react";
import {
  TextField,
  FormHelperText,
  Autocomplete,
  InputLabel,
  Chip,
} from "@mui/material";
import "./Select.scss";

const Select = ({
  id,
  name,
  label,
  labelAdornment,
  options,
  noOptionsText,
  value,
  onChange,
  required,
  disabled,
  defaultValue,
  placeholder,
  disableClearable,
  popupIcon,
  multiple,
  hasError,
  errMsg,
  wrapperClassName,
  labelClassName,
  inputClassName,
  errorClassName,
}) => {
  return (
    <div className={`selectWrapper ${wrapperClassName}`}>
      <InputLabel htmlFor={id || name} className={labelClassName}>
        {label}
        {required && label && <span className="err"> *</span>}
        {labelAdornment && label && (
          <span className="ms-2">{labelAdornment}</span>
        )}
      </InputLabel>

      <Autocomplete
        className={`${inputClassName} ${hasError ? "error-border" : ""}`}
        id={id || name}
        name={name}
        defaultValue={defaultValue}
        disableClearable={disableClearable}
        options={options}
        disabled={disabled}
        getOptionLabel={(option) => option.label || ""}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.label}
          </li>
        )}
        isOptionEqualToValue={(option, value) => option.id == value.id}
        noOptionsText={noOptionsText}
        value={value}
        onChange={(e, value) => {
          onChange(value);
        }}
        popupIcon={!disabled && popupIcon}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            required={required}
            error={hasError}
            className=""
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
        // For Multiple Select Option
        multiple={multiple}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option.id}
              label={option.label}
            />
          ));
        }}
        //
      />

      <FormHelperText
        error={hasError}
        className={`${errorClassName || "font-medium fsize-16"} `}
      >
        {hasError && errMsg}
      </FormHelperText>
    </div>
  );
};

export default Select;

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string,
    })
  ),
  noOptionsText: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  disableClearable: PropTypes.bool,
  popupIcon: PropTypes.element,
  multiple: PropTypes.bool,
  hasError: PropTypes.bool,
  errMsg: PropTypes.string,
  wrapperClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
};
