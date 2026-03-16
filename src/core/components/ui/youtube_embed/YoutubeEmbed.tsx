import styles from "./YoutubeEmbed.module.css";

/**
 * YoutubeEmbed component.
 * Renders a responsive YouTube video embed with Material Design 3 styling.
 * Wraps the iframe in a 16:9 aspect-ratio container that adapts to its parent.
 *
 * How it works:
 * - Uses a padding-bottom trick (56.25% = 16/9) so the container
 *   always keeps the correct aspect ratio at any width.
 * - The iframe is absolutely positioned to fill the container.
 * - Accepts an optional start time in seconds.
 *
 * @param videoId    - YouTube video ID (e.g. "_Ig47f-CQ20")
 * @param title      - Accessible title for the iframe (required for a11y)
 * @param startAt    - Optional start time in seconds (e.g. 354)
 * @param className  - Optional extra class for the outer wrapper
 */

interface YoutubeEmbedProps {
  videoId: string;
  startAt?: number;
  className?: string;
}

export default function YoutubeEmbed({
  videoId,
  startAt,
  className = "",
}: YoutubeEmbedProps) {
  // Build the embed URL; append start time only when provided
  const src =
    `https://www.youtube.com/embed/${videoId}` +
    (startAt ? `?start=${startAt}` : "");

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        <iframe
          className={styles.iframe}
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}