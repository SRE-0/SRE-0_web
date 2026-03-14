import { useState } from "react";
import styles from "./Appimage.module.css";

/**
 * AppImage
 *
 * Generic image component to be used across the entire project.
 *
 * The key difference from a naive wrapper approach: className and
 * imageClassName are kept separate so each consumer can style the
 * wrapper div and the <img> element independently. This is what allows
 * every image context (header, card, single view, avatar…) to keep its
 * own proportions and object-fit without interference.
 *
 * @param src            - URL of the image to load.
 * @param alt            - Alt text for accessibility and SEO. Always required.
 * @param fallback       - Optional URL shown if src fails to load.
 * @param priority       - Disables lazy loading. Use for above-the-fold images.
 *                         Defaults to false.
 * @param className      - Optional class applied to the outer wrapper div.
 *                         Use for positioning, margin, border-radius on the
 *                         container itself.
 * @param imageClassName - Optional class applied directly to the <img> element.
 *                         Use for width, height, max-height, object-fit,
 *                         aspect-ratio — anything that controls the image shape.
 * @param style          - Optional inline styles for the wrapper div.
 */

interface AppImageProps {
  src: string;
  alt: string;
  fallback?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  style?: React.CSSProperties;
}

function AppImage({
  src,
  alt,
  fallback,
  priority = false,
  className,
  imageClassName,
  style,
}: AppImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  /**
   * handleLoad
   * Hides the skeleton and triggers the fade-in transition.
   */
  const handleLoad = () => {
    setIsLoaded(true);
  };

  /**
   * handleError
   * Swaps src to the fallback URL if one was provided.
   * hasError flag prevents an infinite loop if the fallback also fails.
   */
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (fallback && !hasError) {
      setHasError(true);
      e.currentTarget.src = fallback;
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${className ?? ""}`}
      style={style}
    >
      {/* Skeleton shimmer — unmounted once the image is ready */}
      {!isLoaded && (
        <div className={styles.skeleton} aria-hidden="true" />
      )}

      <img
        /*
         * imageClassName is applied directly to <img> so the consumer
         * has full control over sizing and object-fit without a wrapper
         * interfering with the natural proportions of the image.
         */
        className={`${styles.image} ${
          isLoaded ? styles.imageVisible : styles.imageHidden
        } ${imageClassName ?? ""}`}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

export default AppImage;