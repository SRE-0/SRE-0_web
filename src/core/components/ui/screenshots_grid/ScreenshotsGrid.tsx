import AppImage from "../app_image/Appimage";
import styles from "./ScreenshotsGrid.module.css";

/**
 * ImageItem
 * Represents a single screenshot image with its description.
 *
 * @param description - Alt text for the image (accessibility and SEO).
 * @param image       - URL or path to the image.
 */
interface ImageItem {
  description: string;
  image: string;
}

/**
 * ScreenshotsGridProps
 *
 * @param images - Array of ImageItem objects to display in the grid.
 */
interface ScreenshotsGridProps {
  images: ImageItem[];
}

/**
 * ScreenshotsGrid
 *
 * Responsive grid of portrait screenshots displayed at a 9:16 aspect ratio.
 * AppImage replaces the plain <img> — each instance becomes a grid cell.
 *
 * className      → AppImage wrapper div: enforces the 9:16 aspect ratio
 *                  so the skeleton has the correct portrait shape while
 *                  the image is downloading.
 * imageClassName → <img> element: fills the cell and applies the border.
 */
function ScreenshotsGrid({ images }: ScreenshotsGridProps) {
  return (
    <div className={styles.grid}>
      {images.map((item) => (
        <AppImage
          key={item.image}
          src={item.image}
          alt={item.description}
          className={styles.imageWrapper}
          imageClassName={styles.image}
        />
      ))}
    </div>
  );
}

export default ScreenshotsGrid;