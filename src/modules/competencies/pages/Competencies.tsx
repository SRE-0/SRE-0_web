// modules/competencies/pages/Competencies.tsx

import { Navigate } from "react-router-dom";
import { COMPETENCY_PROJECTS } from "../data/competencies.registry";

/*
 * Competencies
 * Index page for the competencies module.
 * Automatically redirects to the first registered project.
 * If no projects exist, renders a fallback message.
 */
export default function Competencies() {
  const first = COMPETENCY_PROJECTS[0];

  if (!first) {
    return <p>No competencies found.</p>;
  }

  return <Navigate to={first.route} replace />;
}