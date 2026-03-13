// modules/competencies/pages/CompetencyDetail.tsx

import { useParams }             from "react-router-dom";
import { COMPETENCY_PROJECTS }   from "../data/competencies.registry";
import ProjectRenderer           from "../../shared/project-renderer/ProjectRenderer";

/*
 * CompetencyDetail
 * Reads :slug from the URL, finds the matching project,
 * and delegates all rendering to ProjectRenderer with the project's schema.
 */
function CompetencyDetail() {
  const { slug }  = useParams<{ slug: string }>();
  const project   = COMPETENCY_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <ProjectRenderer
      sections={project.schema}
      namespace="competencies"
    />
  );
}

export default CompetencyDetail;