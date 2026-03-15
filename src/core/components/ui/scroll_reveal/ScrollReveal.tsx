// core/components/ui/scroll_reveal/ScrollReveal.tsx

import { Children } from "react";
import type { ReactNode } from "react";
import useScrollReveal from "../../../../core/hooks/useScrollReveal";
import styles from "./ScrollReveal.module.css";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Controls how ScrollReveal animates its content.
 *
 * - "cascade" : Detects direct children and staggers each one independently,
 *               producing a top-to-bottom waterfall reveal effect.
 * - "single"  : Treats the entire content as one unit and animates it together
 *               (original behavior).
 */
type RevealMode = "cascade" | "single";

interface ScrollRevealProps {
  /** Content to animate */
  children: ReactNode;

  /**
   * Animation mode.
   * - "cascade" (default): animates each direct child with a staggered delay.
   * - "single": animates the wrapper as a whole (original behavior).
   */
  mode?: RevealMode;

  /**
   * Base stagger delay index applied to the first child in cascade mode,
   * or to the single wrapper in single mode. Range 0–4.
   * Default: 0
   */
  delay?: 0 | 1 | 2 | 3 | 4;

  /**
   * Milliseconds between each child animation in cascade mode.
   * Ignored in "single" mode.
   * Default: 80
   */
  staggerMs?: number;

  /**
   * Extra CSS class applied to the outer wrapper div.
   * Useful for layout styles (width, margin, grid area, etc.) from the parent.
   */
  className?: string;
}

// ---------------------------------------------------------------------------
// Helper: CascadeItem
// ---------------------------------------------------------------------------

interface CascadeItemProps {
  /** The child node to wrap and animate */
  child: ReactNode;
  /** Computed delay in milliseconds for this specific item */
  delayMs: number;
}

/**
 * CascadeItem
 *
 * Internal wrapper used by ScrollReveal in cascade mode.
 * Each direct child of ScrollReveal is individually observed by
 * IntersectionObserver so it can reveal independently.
 *
 * @param child   - The React node to animate.
 * @param delayMs - Transition delay in milliseconds for the stagger effect.
 */
function CascadeItem({ child, delayMs }: CascadeItemProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={isVisible ? styles.visible : styles.hidden}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {child}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component: ScrollReveal
// ---------------------------------------------------------------------------

/**
 * ScrollReveal
 *
 * Animates content from hidden (opacity 0, translateY offset) to visible
 * when it enters the viewport, using IntersectionObserver via useScrollReveal.
 *
 * --- Cascade mode (default) ---
 * Automatically detects all direct children and wraps each one in its own
 * IntersectionObserver instance. Children animate sequentially with a
 * configurable stagger delay between them, creating a waterfall effect
 * without any manual per-child configuration.
 *
 * Example:
 *   <ScrollReveal>
 *     <h1>Title</h1>       <- animates at 0ms
 *     <p>Subtitle</p>      <- animates at 80ms
 *     <Button>CTA</Button> <- animates at 160ms
 *   </ScrollReveal>
 *
 * --- Single mode ---
 * Preserves the original behavior: the entire children block is wrapped in
 * one observed div and animates as a single unit.
 *
 * Example:
 *   <ScrollReveal mode="single" delay={2}>
 *     <ComplexCard />
 *   </ScrollReveal>
 *
 * @param children  - React content to animate.
 * @param mode      - "cascade" (default) or "single".
 * @param delay     - Base delay index (0–4) for the first item or single wrapper.
 * @param staggerMs - Milliseconds between each child in cascade mode. Default: 80.
 * @param className - Optional extra class for the outer wrapper.
 */
function ScrollReveal({
  children,
  mode = "cascade",
  delay = 0,
  staggerMs = 80,
  className = "",
}: ScrollRevealProps) {

  // Single mode: original behavior, one observer for the whole block
  if (mode === "single") {
    return (
      <ScrollRevealSingle delay={delay} className={className}>
        {children}
      </ScrollRevealSingle>
    );
  }

  // Cascade mode: wrap each direct child independently
  const childArray = Children.toArray(children);
  const baseDelayMs = delay * staggerMs;

  return (
    <div className={className || undefined}>
      {childArray.map((child, index) => (
        <CascadeItem
          key={index}
          child={child}
          delayMs={baseDelayMs + index * staggerMs}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Internal: ScrollRevealSingle
// ---------------------------------------------------------------------------

interface ScrollRevealSingleProps {
  children: ReactNode;
  delay: 0 | 1 | 2 | 3 | 4;
  className: string;
}

/**
 * ScrollRevealSingle
 *
 * Handles the original "single" animation mode.
 * Wraps all children in one observed div that animates as a unit.
 * Uses CSS delay classes from the module (delay0 – delay4).
 *
 * @param children  - Content to animate as a whole.
 * @param delay     - Stagger index 0–4, maps to CSS delay class.
 * @param className - Optional layout class from parent.
 */
function ScrollRevealSingle({ children, delay, className }: ScrollRevealSingleProps) {
  const { ref, isVisible } = useScrollReveal();
  const delayClass = styles[`delay${delay}`];

  return (
    <div
      ref={ref}
      className={[
        isVisible ? styles.visible : styles.hidden,
        delayClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;