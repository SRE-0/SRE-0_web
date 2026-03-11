// modules/coding/data/coding.registry.ts

import { buildRoute } from "../../../core/router/routes.constants";

export interface CodingProject {
  id:          string;
  slug:        string;
  image:       string;         // path relativo desde /public
  tags:        string[];
  route:       string;
  // i18n keys — apuntan a las claves en locales/*/coding.json
  i18nKeys: {
    title:       string;
    description: string;
  };
}

//TODO cambiar los nombres y datos de cada proyecto, incluyendo traducciones

export const CODING_PROJECTS: CodingProject[] = [
  {
    id:    "project-gradebook",
    slug:  "Gradebook",
    image: "src/assets/images/projects/gradebook/gradebook_35.webp",
    tags:  ["TypeScript", "CLI"],
    route: buildRoute.codingDetail("gradebook"),
    i18nKeys: {
      title:       "coding_projects.project1.title",
      description: "coding_projects.project1.description",
    },
  },
  {
     id:    "project-teampyros-app",
    slug:  "Teampyros-App",
    image: "src/assets/images/projects/teampyros/app/teampyros_app_35.webp",
    tags:  ["React", "Node", "PostgreSQL"],
    route: buildRoute.codingDetail("teampyros-app"),
    i18nKeys: {
      title:       "coding_projects.project2.title",
      description: "coding_projects.project2.description",
    },
  },
];