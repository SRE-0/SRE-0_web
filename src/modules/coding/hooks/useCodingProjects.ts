// modules/coding/hooks/useCodingProjects.ts

import { useTranslation } from "../../../core/i18n/useTranslation";
import { CODING_PROJECTS, type CodingProject } from "../data/coding.registry";

export interface ResolvedCodingProject extends CodingProject {
  title:       string;
  description: string;
  body:        string;
}

/*
 * useCodingProjects
 * Merges the static registry with translated text for the active language.
 * Returns a fully resolved list ready to render — no i18n logic in components.
 */
export function useCodingProjects(): ResolvedCodingProject[] {
  const { t } = useTranslation("coding");

  return CODING_PROJECTS.map((project) => ({
    ...project,
    title:       t(project.i18nKeys.title),
    description: t(project.i18nKeys.description),
    body:        t(project.i18nKeys.body),
  }));
}