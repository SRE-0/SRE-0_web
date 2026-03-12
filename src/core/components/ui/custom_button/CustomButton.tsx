import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CustomButton.module.css";

/**
 * CustomButton - A flexible button component that supports optional FontAwesome6 icons.
 *
 * Props:
 * @param {string} label - The text displayed inside the button.
 * @param {IconDefinition} [icon] - Optional FontAwesome6 icon to render before the label.
 * @param {"left" | "right"} [iconPosition="left"] - Position of the icon relative to the label.
 * @param {() => void} [onClick] - Optional click handler.
 * @param {"button" | "submit" | "reset"} [type="button"] - HTML button type attribute.
 * @param {boolean} [disabled=false] - Disables the button when true.
 * @param {string} [className] - Optional extra CSS class for external overrides.
 */

interface CustomButtonProps {
  label: string;
  icon?: IconDefinition;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

function CustomButton({
  label,
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: CustomButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.customButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Render icon on the left if iconPosition is "left" */}
      {icon && iconPosition === "left" && (
        <FontAwesomeIcon icon={icon} className={styles.iconLeft} />
      )}

      <span>{label}</span>

      {/* Render icon on the right if iconPosition is "right" */}
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} className={styles.iconRight} />
      )}
    </button>
  );
}

export default CustomButton;