// modules/competencies/data/schemas/teampyros.schema.ts

import { TEAMPYROS_ASSETS }   from "../assets/teampyros.assets";
import type { ProjectSection } from "../../../shared/types/project-schema.types";

/*
 * TEAMPYROS_SCHEMA
 * Ordered list of content sections for the TeamPyros project page.
 * CompetencyDetail iterates this array top-to-bottom to build the page.
 * To reorder, add, or remove content — edit only this file.
 */
export const TEAMPYROS_SCHEMA: ProjectSection[] = [
  {
    type:    "title",
    i18nKey: "competencies_projects.project1.title",
  },
  {
    type:        "header",
    image:       TEAMPYROS_ASSETS.header,
    description: "",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.about.paragraphs.p1",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.about.paragraphs.p2",
  },
  {
    type:        "single-image",
    image:       TEAMPYROS_ASSETS.imgTeam,
    description: "",
  },
  {
    type:    "subtitle",
    i18nKey: "competencies_projects.project1.body.origin.subtitle",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.origin.paragraphs.p1",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.origin.paragraphs.p2",
  },
  {
    type:    "subtitle",
    i18nKey: "competencies_projects.project1.body.solution.subtitle",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.solution.paragraphs.p1",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.solution.paragraphs.p2",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.solution.paragraphs.p3",
  },
  {
    type:        "single-image",
    image:       TEAMPYROS_ASSETS.imgCar,
    description: "",
  },
  {
    type:    "subtitle",
    i18nKey: "competencies_projects.project1.body.system.subtitle",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.system.paragraphs.p1",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.system.paragraphs.p2",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.system.paragraphs.p3",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.system.paragraphs.p4",
  },
  {
    type:    "subtitle",
    i18nKey: "competencies_projects.project1.body.trajectory.subtitle",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.trajectory.paragraphs.p1",
  },
  {
    type:    "paragraph",
    i18nKey: "competencies_projects.project1.body.trajectory.paragraphs.p2",
  },
  {
    type:        "single-image",
    image:       TEAMPYROS_ASSETS.winner,
    description: "",
  },
  {
    type:    "subtitle",
    i18nKey: "competencies_projects.project1.body.gallery",
  },
  {
    type:   "image-grid",
    images: TEAMPYROS_ASSETS.gallery,
  },
];