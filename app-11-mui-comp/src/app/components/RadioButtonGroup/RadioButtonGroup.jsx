import React from "react";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import "./RadioButtonGroup.scss";
import { InputLabel } from "@mui/material";

const RadioButtonsGroup = ({
  wrapperClassName,
  labelClassName,
  radioGroupClassName,
  radioClassName,
  label,
  id,
  name,
  value,
  onChange,
  listOfRadios,
  required,
  labelAdornment,
  hasReplacementBody,
  replacementBody,
  hasError,
  errMsg,
  errorClassName,
  direction,
}) => {
  return (
    <div className={wrapperClassName}>
      <InputLabel
        htmlFor={id || name}
        className={`${labelClassName} label-style`}
      >
        {label}
        {required && label && <span className="err"> *</span>}
        {labelAdornment && label && (
          <span className="ms-2">{labelAdornment}</span>
        )}
      </InputLabel>

      {hasReplacementBody ? (
        replacementBody
      ) : (
        <RadioGroup
          row={direction === "row" ? true : false}
          id={id}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className={radioGroupClassName}
        >
          {listOfRadios.map((radio) => (
            <FormControlLabel
              key={radio.id}
              value={radio.id}
              control={<Radio />}
              label={radio.label}
              disabled={radio.disabled ? radio.disabled : false}
              className={radioClassName}
            />
          ))}
        </RadioGroup>
      )}

      <FormHelperText
        error={hasError}
        className={`${errorClassName || "font-medium fsize-16"} `}
      >
        {hasError && errMsg}
      </FormHelperText>
    </div>
  );
};
export default RadioButtonsGroup;

RadioButtonsGroup.propTypes = {
  wrapperClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  radioGroupClassName: PropTypes.string,
  radioClassName: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  listOfRadios: PropTypes.array,
  required: PropTypes.bool,
  labelAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hasReplacementBody: PropTypes.bool,
  replacementBody: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hasError: PropTypes.bool,
  errMsg: PropTypes.string,
  errorClassName: PropTypes.string,
  direction: PropTypes.string,
};
