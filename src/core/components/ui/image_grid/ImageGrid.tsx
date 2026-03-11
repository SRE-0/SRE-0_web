import styles from "./ImageGrid.module.css"

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

function ImageGrid
({ images }: ImageContainerProps){
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

export default ImageGrid;