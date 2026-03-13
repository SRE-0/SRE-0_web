import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CustomButton.module.css";

/**
 * CustomButton - A flexible button component that supports optional FontAwesome6 icons.
 * When href is provided, renders as an anchor tag to open an external URL.
 *
 * Props:
 * @param {string} label - The text displayed inside the button.
 * @param {IconDefinition} [icon] - Optional FontAwesome6 icon to render before the label.
 * @param {"left" | "right"} [iconPosition="left"] - Position of the icon relative to the label.
 * @param {string} [href] - Optional external URL. When provided, renders as <a> instead of <button>.
 * @param {() => void} [onClick] - Optional click handler.
 * @param {"button" | "submit" | "reset"} [type="button"] - HTML button type attribute.
 * @param {boolean} [disabled=false] - Disables the button when true.
 * @param {string} [className] - Optional extra CSS class for external overrides.
 */

interface CustomButtonProps {
  label: string;
  icon?: IconDefinition;
  iconPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

function CustomButton({
  label,
  icon,
  iconPosition = "left",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: CustomButtonProps) {
  // Shared content between <a> and <button> renders
  const buttonContent = (
    <>
      {icon && iconPosition === "left" && (
        <FontAwesomeIcon icon={icon} className={styles.iconLeft} />
      )}
      <span>{label}</span>
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} className={styles.iconRight} />
      )}
    </>
  );

  // If href is provided, render as anchor tag to navigate to external URL
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.customButton} ${className}`}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  // Default render as a standard button
  return (
    <button
      type={type}
      className={`${styles.customButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}

export default CustomButton;