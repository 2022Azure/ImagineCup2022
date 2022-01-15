import React from "react";
export const key = "H1O9DxVcL7PqbtVYmkYsVwGlzeU-lFw3a8lTc4MvpS0";

export const Description = ({ children }) => {
  return (
    <div className="description">
      <span>Description: </span>
      <br></br>
      {children}
    </div>
  );
};
