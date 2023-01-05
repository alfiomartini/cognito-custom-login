import React from "react";
import "./styles.css";

export const Button = ({
  width = "140px",
  handleClick = () => {},
  children,
  type = "button",
}) => {
  const style = { width: width };

  return (
    <div>
      <button type={type} className="btn" style={style} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};
