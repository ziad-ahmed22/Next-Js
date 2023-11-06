"use client";
import { Box, Chip, FormHelperText, OutlinedInput } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import "./DropDown.scss";

export default function DropDown({
  id,
  name,
  label,
  labelAdornment,
  renderLabel,
  options,
  value,
  onChange,
  required,
  disabled,
  fullWidth,
  hasError,
  errMsg,
  wrapperClassName,
  labelClassName,
  dropDownClassName,
  optionClassName,
  errorClassName,
}) {
  return (
    <div className={`dropdown-wrapper ${wrapperClassName}`}>
      <InputLabel htmlFor={id || name} className={labelClassName}>
        <>
          {label}
          {required && label && <span className="err"> *</span>}
          {labelAdornment && label && (
            <span className="ms-2">{labelAdornment}</span>
          )}
        </>
      </InputLabel>

      <FormControl
        fullWidth={fullWidth ? fullWidth : true}
        disabled={disabled}
        // required={required}
        error={hasError}
      >
        <InputLabel>{renderLabel}</InputLabel>

        <Select
          id={id || name}
          label={label}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={dropDownClassName}
          // renderValue={(value) => `⚠️  ${value}`}
          // multiple
          // input={<OutlinedInput label="Chip" />}
          // renderValue={(selected) => (
          //   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          //     {selected.map((value) => (
          //       <Chip key={value} label={value} />
          //     ))}
          //   </Box>
          // )}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              value={option.id}
              className={optionClassName}
              disabled={option.disabled ? option.disabled : false}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormHelperText
        error={hasError}
        className={`${errorClassName || "font-medium fsize-16"} `}
      >
        {hasError && errMsg}
      </FormHelperText>
    </div>
  );
}

DropDown.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  renderLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string,
    })
  ),
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hasError: PropTypes.bool,
  errMsg: PropTypes.string,
  dropDownClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  optionClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorClassName: PropTypes.string,
};
