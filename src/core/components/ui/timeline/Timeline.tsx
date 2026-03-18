import styles from "./Timeline.module.css";

/**
 * TimelineItem interface.
 * Represents a single milestone entry in the vertical timeline.
 *
 * @param year        - The year or date label displayed beside the dot.
 * @param title       - Short title / heading for this milestone.
 * @param description - Body text that describes what happened.
 * @param accent      - Optional CSS color string to tint this item's dot and line segment.
 *                      Defaults to the primary MD3 token when omitted.
 */
interface TimelineItem {
  year: string;
  title: string;
  description: string;
  accent?: string;
}

/**
 * TimelineProps interface.
 * Props accepted by the Timeline component.
 *
 * @param items - Array of milestone objects to render in chronological order.
 */
interface TimelineProps {
  items: TimelineItem[];
}

/**
 * Timeline component.
 * Renders a vertical timeline with an animated line, pulsing dots,
 * and staggered content reveal cards following Material Design 3 Expressive
 * motion and shape guidelines.
 *
 * How it works:
 * - The vertical line is a CSS ::before pseudo-element on the track container.
 *   It animates its height from 0 to 100% via a CSS @keyframes on mount.
 * - Each dot pulses with a radial "ripple" keyframe to emphasize milestones.
 * - Content cards slide in from the right with staggered animation-delay
 *   driven by the CSS custom property --item-index, set inline.
 * - Accent color overrides are applied via the --accent CSS custom property
 *   set on each row element, so dot, line segment colour, and year label
 *   all pick it up automatically without extra class logic.
 *
 * @param items - Array of TimelineItem objects to display.
 */
function Timeline({ items }: TimelineProps) {
  return (
    <div className={styles.timelineWrapper}>
      {/* Animated vertical track line */}
      <div className={styles.track} aria-hidden="true" />

      <ol className={styles.list}>
        {items.map((item, index) => (
          <li
            key={`${item.year}-${index}`}
            className={styles.row}
            style={
              {
                "--item-index": index,
                "--accent": item.accent ?? "var(--md-sys-color-primary)",
              } as React.CSSProperties
            }
          >
            {/* Left column: year label + dot */}
            <div className={styles.marker}>
              <span className={styles.year}>{item.year}</span>

              {/* Outer ripple ring — purely decorative pulse */}
              <span className={styles.ripple} aria-hidden="true" />

              {/* Solid milestone dot */}
              <span className={styles.dot} aria-hidden="true" />
            </div>

            {/* Right column: content card */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;