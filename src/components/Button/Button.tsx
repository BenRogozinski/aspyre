"use client"

import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled=false }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={
        () => {if (onClick) onClick()}
      }
      disabled={disabled}
    >
      <span className={styles.buttonContents}>
        { children }
      </span>
    </button>
  );
}

export default Button;