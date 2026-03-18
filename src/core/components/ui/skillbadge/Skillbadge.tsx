import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SkillBadge.module.css";

/**
 * SkillBadge component.
 *
 * Renders a single pill-shaped skill chip with a FontAwesome icon,
 * a label, and a color scheme derived from a CSS custom property pair.
 *
 * How it works:
 *   - The `colorKey` prop maps to a pair of CSS variables defined in
 *     tokens.css:
 *       --md-skill-<colorKey>          (background / container color)
 *       --md-skill-on-<colorKey>       (foreground / icon + text color)
 *   - This keeps all color decisions in one central file and lets the
 *     parent page simply pass a string key.
 *
 * Props:
 *   icon      - FontAwesome icon definition to render on the left.
 *   label     - Human-readable skill name shown beside the icon.
 *   colorKey  - Identifier that resolves to the CSS variable pair.
 *               E.g. "kotlin" -> var(--md-skill-kotlin) /
 *               var(--md-skill-on-kotlin).
 */

interface SkillBadgeProps {
  icon: IconDefinition;
  label: string;
  colorKey: string;
}

export default function SkillBadge({ icon, label, colorKey }: SkillBadgeProps) {
  return (
    <div
      className={styles.badge}
      style={{
        backgroundColor: `var(--md-skill-${colorKey})`,
        color: `var(--md-skill-on-${colorKey})`,
      }}
    >
      {/* Skill icon — hidden from screen readers since label is present */}
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
        aria-hidden="true"
      />

      {/* Skill label */}
      <span className={styles.label}>{label}</span>
    </div>
  );
}