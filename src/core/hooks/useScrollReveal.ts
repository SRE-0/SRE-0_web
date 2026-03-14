// core/hooks/useScrollReveal.ts

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  /**
   * Fraction of the element that must be visible before triggering.
   * 0 = as soon as any pixel enters viewport, 1 = fully visible.
   * Default: 0.12
   */
  threshold?: number;
  /**
   * Margin around the root viewport used to expand or shrink
   * the intersection area. Negative values trigger earlier.
   * Default: "0px 0px -40px 0px" (triggers slightly before bottom edge)
   */
  rootMargin?: string;
  /**
   * Once true, the observer disconnects and the element stays visible.
   * Set to false to re-animate when the element leaves and re-enters.
   * Default: true
   */
  triggerOnce?: boolean;
}

interface UseScrollRevealReturn {
  /** Attach this ref to the DOM element you want to observe */
  ref: React.RefObject<HTMLDivElement | null>;
  /** True once the element has entered the viewport */
  isVisible: boolean;
}

/**
 * useScrollReveal
 * Tracks whether a DOM element has entered the viewport using IntersectionObserver.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 * Cleans up the observer automatically on unmount.
 *
 * @param options - threshold, rootMargin, and triggerOnce configuration
 * @returns ref and isVisible boolean
 */
function useScrollReveal({
  threshold   = 0.12,
  rootMargin  = "0px 0px -40px 0px",
  triggerOnce = true,
}: UseScrollRevealOptions = {}): UseScrollRevealReturn {
  const ref        = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export default useScrollReveal;