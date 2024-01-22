// variant: solid, outlined
// s[variant]
// .solid, .outlined

import clsx from "clsx";
import s from "../Button/Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outlined";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "solid",
  onClick,
}) => {
  return (
    <button className={clsx(s[variant], s.btn, className)} onClick={onClick}>
      {children}
    </button>
  );
};
