import * as React from "react";
import { TypeInput } from "../../interfaces/input";
import "./Input.scss";

interface InputProps {
  type?: TypeInput;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  style?: object;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  id,
  name,
  placeholder,
  style,
}) => {
  return (
    <input
      type={type}
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      style={style}
      className={`input-${type} input`}
    />
  );
};

Input.defaultProps = {
  type: "text",
  id: "",
  name: "",
  placeholder: "",
  value: "",
  style: {},
};

export default React.memo(Input);
