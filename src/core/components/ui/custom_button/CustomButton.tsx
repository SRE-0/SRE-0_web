import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CustomButton.module.css";

/**
 * CustomButton component.
 * A flexible Material Design 3 button that supports icons, variants,
 * and renders as either a <button> or an <a> tag depending on props.
 *
 * How it works:
 * - When `href` is provided, renders as <a> with target="_blank".
 * - When `href` is absent, renders as a standard <button>.
 * - The `variant` prop controls the visual style following MD3 specs.
 * - Icons are rendered via FontAwesome and can be placed left or right.
 * - The state layer (hover/press overlay) is handled via a CSS ::after
 *   pseudo-element to avoid changing the background color directly.
 * - When `animated` is true, a wrapper div with a spinning conic-gradient
 *   border surrounds the button. The button background is set to the
 *   surface color so the gradient only shows as the 2px border ring.
 *
 * @param label        - Visible text inside the button.
 * @param icon         - Optional FontAwesome6 icon definition.
 * @param iconPosition - Side where the icon appears: "left" (default) or "right".
 * @param variant      - MD3 visual style: "filled" (default) | "outlined" | "tonal".
 * @param animated     - Enables the spinning gradient border ring. Default: false.
 * @param href         - External URL. When provided, renders the button as an <a> tag.
 * @param onClick      - Optional click handler for both <a> and <button> renders.
 * @param type         - HTML button type ("button" | "submit" | "reset"). Default: "button".
 * @param disabled     - Disables interaction and dims the button visually. Default: false.
 * @param className    - Optional extra CSS class for external overrides.
 */

interface CustomButtonProps {
  label: string;
  icon?: IconDefinition;
  iconPosition?: "left" | "right";
  variant?: "filled" | "outlined" | "tonal";
  animated?: boolean;
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
  variant = "filled",
  animated = false,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: CustomButtonProps) {
  // Resolve the variant class to combine with the base button class.
  // When animated is true, override with the animatedInner class so the
  // button background covers the conic-gradient except at the 2px border ring.
  const variantClass = animated
    ? styles.animatedInner
    : (styles[variant] ?? styles.filled);

  // Shared inner content for both <a> and <button> renders
  const buttonContent = (
    <>
      {icon && iconPosition === "left" && (
        <FontAwesomeIcon icon={icon} className={styles.icon} aria-hidden="true" />
      )}
      <span>{label}</span>
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} className={styles.icon} aria-hidden="true" />
      )}
    </>
  );

  // Shared class string built once to avoid duplication
  const combinedClass = `${styles.customButton} ${variantClass} ${className}`;

  // Build the inner element (anchor or button) without the animated wrapper
  const innerElement = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedClass}
      onClick={onClick}
      aria-label={label}
    >
      {buttonContent}
    </a>
  ) : (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {buttonContent}
    </button>
  );

  // When animated, wrap the element inside the spinning gradient ring div
  if (animated) {
    return (
      <div className={styles.animatedWrapper}>
        {innerElement}
      </div>
    );
  }

  return innerElement;
}

export default CustomButton;