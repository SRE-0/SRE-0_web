import React from "react";
import { useTheme } from "../../../theme/ThemeContext";
import type { Theme } from "../../../theme/theme.types";
import styles from "./ThemeToggle.module.css";

// ---------------------------------------------------------------------------
// Icon map — one icon per theme mode
// ---------------------------------------------------------------------------

const THEME_ICON: Record<Theme, string> = {
  light: "☀️",
  dark:  "🌙",
  auto:  "💻",
};

const THEME_LABEL: Record<Theme, string> = {
  light: "Light",
  dark:  "Dark",
  auto:  "Auto",
};

/**
 * ThemeToggle
 * Button that cycles through the three theme modes: auto → light → dark → auto.
 * Reads and updates theme via the useTheme hook.
 * No props required.
 */
function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={cycleTheme}
      aria-label={`Current theme: ${theme}. Click to switch.`}
      title={`Theme: ${THEME_LABEL[theme]}`}
    >
      <span className={styles.icon}>{THEME_ICON[theme]}</span>
      <span className={styles.label}>{THEME_LABEL[theme]}</span>
    </button>
  );
}

export default ThemeToggle;