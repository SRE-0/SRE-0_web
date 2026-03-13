// modules/shared/types/project-schema.types.ts

import type { ProjectImageItem } from "./project-assets.types";

/*
 * ProjectSection
 * Union type representing every possible content block a project page can have.
 * CompetencyDetail and CodingDetail iterate over these to render the page.
 *
 * Each variant has a unique `type` field used as a discriminant.
 */
export type ProjectSection =
  | HeaderSection
  | TitleSection
  | ParagraphSection
  | SubtitleSection
  | SingleImageSection
  | ImageGridSection
  | ScreenshotsGridSection
  | ButtonSection;

/*
 * HeaderSection
 * Full-width hero image at the top of the page.
 * - image: resolved image URL
 * - description: alt text
 */
export interface HeaderSection {
  type:        "header";
  image:       string;
  description: string;
}

/*
 * TitleSection
 * Main h1 of the page — usually the project name.
 * - i18nKey: key in the module's JSON file
 */
export interface TitleSection {
  type:    "title";
  i18nKey: string;
}

/*
 * SubtitleSection
 * Section heading (h2).
 * - i18nKey: key in the module's JSON file
 */
export interface SubtitleSection {
  type:    "subtitle";
  i18nKey: string;
}

/*
 * ParagraphSection
 * A single translated paragraph.
 * - i18nKey: key in the module's JSON file
 */
export interface ParagraphSection {
  type:    "paragraph";
  i18nKey: string;
}

/*
 * SingleImageSection
 * One image with optional description.
 * - image: resolved image URL
 * - description: alt text
 */
export interface SingleImageSection {
  type:        "single-image";
  image:       string;
  description: string;
}

/*
 * ImageGridSection
 * Responsive grid of multiple images.
 * - images: array of image + description pairs
 */
export interface ImageGridSection {
  type:   "image-grid";
  images: ProjectImageItem[];
}

/*
 * ScreenshotsGridSection
 * Grid specifically styled for app screenshots.
 * - images: array of image + description pairs
 */
export interface ScreenshotsGridSection {
  type:   "screenshots-grid";
  images: ProjectImageItem[];
}

/*
 * ButtonSection
 * A call-to-action button with an external link.
 * - i18nKey: key for the button label
 * - href: destination URL
 * - icon: FontAwesome icon definition (optional)
 */
export interface ButtonSection {
  type:    "button";
  i18nKey: string;
  href:    string;
  icon?:   object;
}