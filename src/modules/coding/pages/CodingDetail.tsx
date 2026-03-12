// modules/coding/pages/CodingDetail.tsx

import { useParams }         from "react-router-dom";
import { useCodingProjects } from "../hooks/useCodingProjects";
import styles                from "./CodingDetail.module.css";

/*
 * CodingDetail
 * Detail page for a single coding project.
 * Reads :slug from the URL, finds the matching project in the registry,
 * and renders its full content.
 */
function CodingDetail() {
  const { slug }   = useParams<{ slug: string }>();
  const projects   = useCodingProjects();
  const project    = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <main className={styles.page}>
      <img src={project.image} alt={project.title} className={styles.image} />
      <h1 className={styles.title}>{project.title}</h1>
      <ul className={styles.tags}>
        {project.tags.map((tag) => (
          <li key={tag} className={styles.tag}>{tag}</li>
        ))}
      </ul>
      <p className={styles.body}>{project.body}</p>
    </main>
  );
}
export default CodingDetail;