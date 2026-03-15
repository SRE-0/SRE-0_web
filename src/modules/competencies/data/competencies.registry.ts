// modules/competencies/data/competencies.registry.ts

import { buildRoute }           from "../../../core/router/routes.constants";
import { TEAMPYROS_SCHEMA }     from "./schemas/teampyros.schema";
import type { ProjectSection }   from "../../shared/types/project-schema.types";

import imgTeampyros from "../../../assets/images/projects/teampyros/teampyros_30.webp";

export interface CompetencyProject {
  id:          string;
  slug:        string;
  image:       string;
  tags:        string[];
  route:       string;
  schema:      ProjectSection[];   // ordered content blocks
  i18nKeys: {
    title:       string;
    title1:       string;
    description: string;
    body:        string;
  };
}

export const COMPETENCY_PROJECTS: CompetencyProject[] = [
  {
    id:     "teampyros",
    slug:   "teampyros",
    image:  imgTeampyros,
    tags:   ["Robotics", "Firebase", "Android", "C++", "Kotlin", "IOT"],
    route:  buildRoute.competencyDetail("teampyros"),
    schema: TEAMPYROS_SCHEMA,
    i18nKeys: {
      title:       "competencies_projects.project1.title",
      title1:       "competencies_projects.project1.title1",
      description: "competencies_projects.project1.description",
      body:        "competencies_projects.project1.description"
    },
  },
];