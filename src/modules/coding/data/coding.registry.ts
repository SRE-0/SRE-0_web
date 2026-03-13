import { buildRoute } from "../../../core/router/routes.constants";
import { TEAMPYROS_APP_SCHEMA } from "./schemas/teampyros-app.schema";
import type { ProjectSection } from "../../shared/types/project-schema.types";

import imgGradebook    from "../../../assets/images/projects/gradebook/gradebook_35.webp";
import imgTeampyrosApp from "../../../assets/images/projects/teampyros/app/teampyros_app_35.webp";

export interface CodingProject {
  id:     string;
  slug:   string;
  image:  string;
  tags:   string[];
  route:  string;
  schema: ProjectSection[];
  i18nKeys: {
    title:       string;
    title1:       string;
    description: string;
    body:        string;
  };
}

export const CODING_PROJECTS: CodingProject[] = [
  {
    id:    "project-gradebook",
    slug:  "gradebook",           // lowercase — must match buildRoute exactly
    image: imgGradebook,
    tags:  ["Android", "Java"],
    route: buildRoute.codingDetail("gradebook"),
    schema: TEAMPYROS_APP_SCHEMA,
    i18nKeys: {
      title:       "coding_projects.project1.title",
      title1:       "coding_projects.project1.title1",
      description: "coding_projects.project1.description",
      body:        "coding_projects.project1.body",
    },
  },
  {
    id:    "project-teampyros-app",
    slug:  "teampyros-app",       // lowercase — must match buildRoute exactly
    image: imgTeampyrosApp,
    tags:  ["Android", "Firebase"],
    route: buildRoute.codingDetail("teampyros-app"),
    schema: TEAMPYROS_APP_SCHEMA,
    i18nKeys: {
      title:       "coding_projects.project2.title",
      title1:       "coding_projects.project2.title1",
      description: "coding_projects.project2.description",
      body:        "coding_projects.project2.body",
    },
  },
];