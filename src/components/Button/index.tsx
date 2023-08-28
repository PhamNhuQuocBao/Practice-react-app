import React from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "text" | "danger" | "default";
  style?: object;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, style, children, icon }) => {
  return (
    <>
      <button className={`btn btn-${type}`} style={style}>
        {icon}
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  type: "default",
  style: {},
  icon: undefined,
};

export default React.memo(Button);
