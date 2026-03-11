// modules/shared/project-card/ProjectCard.tsx

import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title:       string;
  description: string;
  image:       string;
  tags:        string[];
  route:       string;
}

/*
 * ProjectCard
 * Generic card for displaying a project preview.
 * Receives already-resolved data (translated text, final route, image path).
 * Has no knowledge of i18n or registry internals.
 *
 * Props:
 * - title:       translated project title
 * - description: translated short description
 * - image:       path to the project image from /public
 * - tags:        list of technology tags
 * - route:       full route string for the detail page link
 */
function ProjectCard({ title, description, image, tags, route }: ProjectCardProps) {
  return (
    <Link to={route} className={styles.card}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={image} 
          alt={title}
        />
      </div>
      <div className={styles.text_container}>
        <h3 className={styles.text_title}>{title}</h3>
        <p className={styles.text_description}>{description}</p>
      </div>
    </Link>
      
  )
}

export default ProjectCard;