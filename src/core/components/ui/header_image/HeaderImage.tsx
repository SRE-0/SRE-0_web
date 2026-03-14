import AppImage from "../app_image/Appimage";
import styles from "./HeaderImage.module.css";

/**
 * HeaderImageProps
 *
 * @param description - Alt text for accessibility and SEO.
 * @param image       - URL of the image to display.
 * @param priority    - Disables lazy loading for above-the-fold images.
 */
interface HeaderImageProps {
  description: string;
  image: string;
  priority?: boolean;
}

/**
 * HeaderImage
 *
 * Header banner image. Fills the full width, capped at 280px height,
 * and crops with object-fit: cover to always fill the space cleanly.
 *
 * className    → wrapper: sets the dimensions and border-radius of the container.
 * imageClassName → img: sets width/height/object-fit so the image fills
 *                  the wrapper without distortion.
 */
function HeaderImage({ image, description, priority }: HeaderImageProps) {
  return (
    <AppImage
      src={image}
      alt={description}
      priority={priority}
      className={styles.wrapper}
      imageClassName={styles.image}
    />
  );
}

export default HeaderImage;