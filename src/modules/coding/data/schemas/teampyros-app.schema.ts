// modules/coding/data/schemas/teampyros-app.schema.ts

import { TEAMPYROS_ASSETS }    from "../assets/teampyros.assets";
import type { ProjectSection }  from "../../../shared/types/project-schema.types";

export const TEAMPYROS_APP_SCHEMA: ProjectSection[] = [
  {
    type:    "title",
    i18nKey: "coding_projects.project2.title",
  },
  {
    type:        "header",
    image:       TEAMPYROS_ASSETS.header,
    description: "",
  },
  {
    type:    "paragraph",
    i18nKey: "coding_projects.project2.body.monitoring",
  },
  {
    type:    "paragraph",
    i18nKey: "coding_projects.project2.body.emergency",
  },
  {
    type:    "paragraph",
    i18nKey: "coding_projects.project2.body.technology",
  },
  {
    type:"subtitle",
    i18nKey: "coding_projects.screenshots",
  },
  {
    type:    "screenshots-grid",
    images:  TEAMPYROS_ASSETS.screenshots,
  },
];