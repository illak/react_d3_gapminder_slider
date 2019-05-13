import React from "react";

const Select = ({ options, fOnChange }) => {
  return (
    <select
      className="ui selection dropdown"
      onChange={e => fOnChange(e.target.value)}
    >
      {options.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Select;
