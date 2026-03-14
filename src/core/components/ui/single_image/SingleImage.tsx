import AppImage from "../app_image/Appimage";
import styles from "./SingleImage.module.css";

/**
 * ImageContainerProps
 *
 * @param image       - URL of the image to display.
 * @param description - Alt text for accessibility and SEO.
 */
interface ImageContainerProps {
  image: string;
  description: string;
}

/**
 * ImageContainer
 *
 * Displays a single centered image that respects its natural proportions.
 * object-fit: contain is used so the image never gets cropped or stretched.
 *
 * className    → wrapper: centers the image and provides the outer layout.
 * imageClassName → img: constrains the size while preserving aspect ratio.
 */
function ImageContainer({ image, description }: ImageContainerProps) {
  return (
    <div className={styles.imageWrapper}>
      <AppImage
        src={image}
        alt={description}
        className={styles.appImageWrapper}
        imageClassName={styles.image}
      />
    </div>
  );
}

export default ImageContainer;