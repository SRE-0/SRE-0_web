// modules/shared/project-card/ProjectCard.tsx

import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title:       string;
  title1?:     string;
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
 * - title:       main project title (rendered in primary color)
 * - title1:      optional secondary title segment (rendered in normal weight beside title)
 * - description: translated short description shown below the title
 * - image:       path to the project image from /public
 * - tags:        list of technology tags (rendered as pill badges)
 * - route:       full route string for the detail page link
 */
function ProjectCard({ title, title1 = "", description, image, tags, route }: ProjectCardProps) {
  return (
    <Link to={route} className={styles.card}>

      {/* Image area with zoom-on-hover effect */}
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={image}
          alt={title}
        />
      </div>

      {/* Text content area */}
      <div className={styles.textContainer}>

        {/*
         * Title row — both title segments sit on the same line.
         * title  is rendered with primary color and semibold weight.
         * title1 is rendered with muted color and regular weight.
         * Both live inside a single <p> as inline <span> elements
         * to guarantee they flow on the same line.
         */}
        <span className={styles.titleMain}>{title}</span>
        <span className={styles.titleSub}>{title1}</span>

        <p className={styles.description}>{description}</p>

        {/* Technology tag pills */}
        {tags && tags.length > 0 && (
          <div className={styles.tagList}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </Link>
  );
}

export default ProjectCard;