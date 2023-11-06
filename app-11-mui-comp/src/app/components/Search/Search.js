"use client";
import { TextField, InputLabel, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import { Search } from "@mui/icons-material";
import "./Search.scss";

const SearchInput = ({
  id,
  name,
  label,
  labelAdornment,
  value,
  onChange,
  placeholder,
  defaultValue,
  disabled,
  fullWidth,
  autoComplete,
  wrapperClassName,
  labelClassName,
  inputClassName,
}) => (
  <div className={`search-input-wrapper ${wrapperClassName}`}>
    <InputLabel htmlFor={id || name} className={labelClassName}>
      {label}
      {labelAdornment && label && (
        <span className="ms-2">{labelAdornment}</span>
      )}
    </InputLabel>

    <TextField
      id={id || name}
      name={name}
      type="text"
      autoFocus={!!value}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      fullWidth={fullWidth ? fullWidth : true}
      className={inputClassName}
      autoComplete={autoComplete}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        // endAdornment: (
        //   <InputAdornment position="end">
        //     <Search />
        //   </InputAdornment>
        // ),
      }}
    />
  </div>
);

export default SearchInput;

SearchInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  autoComplete: PropTypes.string,
  wrapperClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};
