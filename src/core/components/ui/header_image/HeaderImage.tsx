import styles from "./HeaderImage.module.css"

interface HeaderImageProps{
    description: string;
    image: string;
}

function HeaderImage({image, description}:HeaderImageProps) {
  return (
    <img 
        className={styles.image}
        src={image} 
        alt={description} 
    />
  )
}

export default HeaderImage;
