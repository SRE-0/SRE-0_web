// modules/coding/hooks/useCodingProjects.ts

import { useTranslation } from "../../../core/i18n/useTranslation";
import { COMPETENCY_PROJECTS, type CompetencyProject } from "../data/competencies.registry";

export interface ResolvedCompetencyProject extends CompetencyProject {
  title:       string;
  description: string;
  body:        string;
}

/*
 * useCodingProjects
 * Merges the static registry with translated text for the active language.
 * Returns a fully resolved list ready to render — no i18n logic in components.
 */
export function useCompetencyProjects(): ResolvedCompetencyProject[] {
  const { t } = useTranslation("competencies");

  return COMPETENCY_PROJECTS.map((project) => ({
    ...project,
    title:       t(project.i18nKeys.title),
    description: t(project.i18nKeys.description),
    body:        t(project.i18nKeys.body),
  }));
}