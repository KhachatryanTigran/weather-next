import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode | String;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default Button;
