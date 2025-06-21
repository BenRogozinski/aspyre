"use client"

import styles from "./Checkbox.module.css";

type CheckboxProps = {
  label?: string;
  labelPosition?: "left" | "right" | "top" | "bottom";
  disabled?: boolean;
  checked?: boolean;
  size?: "small" | "medium" | "large";
  accent?: "blue" | "purple" | "magenta";
  onChange?: (checked: boolean) => void;
};

const labelPositionClassMapping = {
  left: "textLeft",
  right: "textRight",
  top: "textTop",
  bottom: "textBottom",
};

const Checkbox = ({
  label,
  labelPosition = "right",
  disabled = false,
  checked = false,
  size = "medium",
  accent = "blue",
  onChange,
}: CheckboxProps) => {
  const positionClass = styles[labelPositionClassMapping[labelPosition]];

  return (
    <div className={`${styles.checkboxContainer} ${positionClass}`}>
      <div
        className={`${styles.checkbox} ${styles[size]} ${styles[accent]}`}
      >
        <input
          type="checkbox"
          className={`${styles.checkboxInput} ${styles[size]}`}
          disabled={disabled}
          defaultChecked={checked}
          onClick={
            (e: React.MouseEvent<HTMLInputElement>) => {
              if (onChange) {
                onChange(e.currentTarget.checked);
              }
            }
          }
        />
        <span className={`${styles.check} ${styles[size]}`}>
          ✓
        </span>
      </div>
      {label && (
        <span className={`${styles.checkboxLabel} ${styles[size]}`}>
          {label}
        </span>
      )}
    </div>
  );
};

export default Checkbox;

