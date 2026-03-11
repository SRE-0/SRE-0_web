import styles from "./ScreenshotsGrid.module.css"

/**
 * ImageItem
 * Represents a single screenshot image with its description.
 * @param description - Alt text for the image (accessibility)
 * @param image - URL or path to the image
 */
interface ImageItem {
  description: string;
  image: string;
}

/**
 * ImageContainerProps
 * Props for the ImageContainer component.
 * @param images - Array of ImageItem objects to display in the grid
 */
interface ImageContainerProps {
  images: ImageItem[];
}

/**
 * ImageContainer
 * Renders a responsive grid of portrait screenshots.
 * Each image is displayed at a 9:16 aspect ratio (vertical/portrait)
 * without cropping, zoom, or whitespace — the image fills the container
 * exactly by using aspect-ratio + object-fit: contain.
 *
 * @param images - List of { image, description } items to render
 */
function ImageContainer({ images }: ImageContainerProps) {
  return (
    <div className={styles.grid}>
      {images.map((item) => (
        /* Wrapper enforces the 9:16 aspect ratio box */
        <img
            className={styles.image}
            src={item.image}
            alt={item.description}
        />
      ))}
    </div>
  )
}

export default ImageContainer;