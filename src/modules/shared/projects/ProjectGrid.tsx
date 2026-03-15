// modules/shared/projects/ProjectGrid.tsx

import styles from "./ProjectGrid.module.css";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  /** List of projects to render as cards inside the grid */
  projects: {
    title:       string;
    title1?:     string;
    description: string;
    image:       string;
    tags:        string[];
    route:       string;
  }[];
}

/*
 * ProjectGrid
 * Renders a responsive CSS grid of ProjectCard components.
 * Accepts any flat list of projects — coding, competency, or mixed.
 *
 * Props:
 * - projects: array of project data objects, each matching ProjectCardProps.
 *             The route field is used as the React key for each card.
 */
function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) return null;

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.route} {...project} />
      ))}
    </div>
  );
}

export default ProjectGrid;