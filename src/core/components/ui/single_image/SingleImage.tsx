import React from 'react'
import styles from "./SingleImage.module.css"

interface ImageContainerProps{
    image: string, 
    description: string
}

function ImageContainer({ image, description }: ImageContainerProps) {
  return (
    <div className={styles.imageWrapper}>
      <img 
        className={styles.image}
        src={image} 
        alt={description}
      />
    </div>
  )
}

export default ImageContainer;