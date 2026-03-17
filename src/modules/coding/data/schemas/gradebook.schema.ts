// modules/coding/data/schemas/teampyros-app.schema.ts

import { GRADEBOOK_ASSETS } from "../assets/gradebook.assets";
import type { ProjectSection }  from "../../../shared/types/project-schema.types";
import { faGithub }             from "@fortawesome/free-brands-svg-icons";

export const GRADEBOOK_SCHEMA: ProjectSection[] = [
  {
    type:    "title",
    i18nKey: "coding_projects.project1.title",
  },
  {
    type:        "header",
    image:       GRADEBOOK_ASSETS.header,
    description: "",
  },
  {
    type:    "paragraph",
    i18nKey: "coding_projects.project1.body.management",
  },
  {
    type:    "paragraph",
    i18nKey: "coding_projects.project1.body.interface",
  },
  {
    type:    "paragraph",
    i18nKey: "coding_projects.project1.body.statistics",
  },  
  {
    type:    "paragraph",
    i18nKey: "coding_projects.project1.body.technology",
  },
  /*
  TODO: add actual screenshots
  {
    type:"subtitle",
    i18nKey: "coding_projects.screenshots",
  },
  {
    type:    "screenshots-grid",
    images:  GRADEBOOK_ASSETS.screenshots,
  },*/
  {
    type:    "subtitle",
    i18nKey: "coding_projects.download",
  },
  {
    type:    "paragraph",
    i18nKey: "coding_projects.download_description",
  },
  {
    type:    "button",
    i18nKey: "coding_projects.github_button",
    href:    "https://github.com/SRE-0",
    icon:    faGithub,
  },
];