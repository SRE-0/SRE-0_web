import AppImage from "../app_image/Appimage";
import styles from "./ImageGrid.module.css";

/**
 * ImageItem
 * Represents a single image with its description.
 *
 * @param description - Alt text for the image (accessibility and SEO).
 * @param image       - URL or path to the image.
 */
interface ImageItem {
  description: string;
  image: string;
}

/**
 * ImageGridProps
 *
 * @param images - Array of ImageItem objects to display in the grid.
 */
interface ImageGridProps {
  images: ImageItem[];
}

/**
 * ImageGrid
 *
 * Responsive grid of images.
 * AppImage replaces the plain <img> — each instance becomes a grid cell.
 *
 * className      → AppImage wrapper div: becomes the grid cell, inherits
 *                  the grid's sizing and enforces the aspect ratio.
 * imageClassName → <img> element: fills the cell with object-fit: cover.
 */
function ImageGrid({ images }: ImageGridProps) {
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

export default ImageGrid;