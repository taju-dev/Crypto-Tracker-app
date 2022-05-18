import React from "react";

const SelectButton = ({ children, onClick }) => {
  return (
    <span onClick={onClick} className="button">
      {children}
    </span>
  );
};

export default SelectButton;
