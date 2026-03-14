// core/components/ui/scroll_reveal/ScrollReveal.tsx

// core/components/ui/scroll_reveal/ScrollReveal.tsx
import type { ReactNode } from "react";
import useScrollReveal  from "../../../../core/hooks/useScrollReveal";
import styles           from "./ScrollReveal.module.css";

interface ScrollRevealProps {
  /** Content to animate */
  children: ReactNode;
  /**
   * Stagger delay index (0–4).
   * Maps to a CSS delay class: 0 = 0ms, 1 = 80ms, 2 = 160ms, etc.
   * Use consecutive values on sibling elements for a cascading effect.
   * Default: 0
   */
  delay?: 0 | 1 | 2 | 3 | 4;
  /**
   * Extra CSS class to pass to the wrapper div.
   * Useful for applying layout styles (width, margin, etc.) from the parent.
   */
  className?: string;
}

/**
 * ScrollReveal
 * Wraps any content in a div that animates from hidden to visible
 * when it enters the viewport, using IntersectionObserver via useScrollReveal.
 *
 * Combines a base .hidden state (opacity 0, translateY) with a .visible
 * state and an optional stagger delay for cascading section reveals.
 *
 * @param children  - any React content to animate
 * @param delay     - stagger index 0–4 controlling transition-delay
 * @param className - optional extra class for layout overrides
 */
function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
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