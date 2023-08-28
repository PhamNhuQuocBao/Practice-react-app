import * as React from "react";
import "./Select.scss";

export interface TypeOptions {
  label: string;
  value: string;
}

interface SelectProps {
  id?: string;
  name?: string;
  options: Array<TypeOptions>;
}

const Select: React.FC<SelectProps> = ({ id, name, options }) => {
  return (
    <select id={id} name={name} className="select">
      {options.map(({ label, value }, index) => (
        <option value={value} key={index}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  id: "",
  name: "",
};

export default React.memo(Select);
