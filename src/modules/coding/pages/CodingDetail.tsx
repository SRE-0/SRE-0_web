// modules/coding/pages/CodingDetail.tsx

import { useParams }         from "react-router-dom";
import { CODING_PROJECTS } from "../data/coding.registry";
import ProjectRenderer           from "../../shared/project-renderer/ProjectRenderer";

/*
 * CodingDetail
 * Detail page for a single coding project.
 * Reads :slug from the URL, finds the matching project in the registry,
 * and renders its full content.
 */
function CodingDetail() {
  const { slug }   = useParams<{ slug: string }>();
  const project    = CODING_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <ProjectRenderer
      sections={project.schema}
      namespace="coding"
    />
  );
}
export default CodingDetail;