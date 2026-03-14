// modules/shared/project-renderer/ProjectRenderer.tsx

import { useTranslation }   from "../../../core/i18n/useTranslation";
import HeaderImage          from "../../../core/components/ui/header_image/HeaderImage";
import SingleImage          from "../../../core/components/ui/single_image/SingleImage";
import ImageGrid            from "../../../core/components/ui/image_grid/ImageGrid";
import ScreenshotsGrid      from "../../../core/components/ui/screenshots_grid/ScreenshotsGrid";
import CustomButton         from "../../../core/components/ui/custom_button/CustomButton";
import ScrollReveal         from "../../../core/components/ui/scroll_reveal/ScrollReveal";
import type { ProjectSection } from "../types/project-schema.types";

interface ProjectRendererProps {
  sections:  ProjectSection[];
  namespace: string;   // i18n namespace: "coding" | "competencies"
}

/**
 * getDelayForSection
 * Returns a stagger delay index (0–4) based on the section's position
 * within a consecutive run of the same type.
 * Text blocks within the same group cascade with increasing delay;
 * visual sections (images, grids) always use delay 0 for immediate reveal.
 *
 * @param section - the current section being rendered
 * @param index   - its index in the full sections array
 * @param sections - the full sections array for look-back context
 * @returns delay index 0 | 1 | 2 | 3 | 4
 */
function getDelayForSection(
  section:  ProjectSection,
  index:    number,
  sections: ProjectSection[]
): 0 | 1 | 2 | 3 | 4 {
  // Visual sections always animate immediately — no stagger
  const visualTypes = ["header", "single-image", "image-grid", "screenshots-grid", "button"];
  if (visualTypes.includes(section.type)) return 0;

  // For text sections, count how many consecutive same-type siblings precede this one
  let run = 0;
  for (let i = index - 1; i >= 0; i--) {
    if (sections[i].type === section.type) run++;
    else break;
  }

  return (Math.min(run, 4)) as 0 | 1 | 2 | 3 | 4;
}

/*
 * ProjectRenderer
 * Iterates a ProjectSection[] and maps each entry to its UI component,
 * wrapping every section in a ScrollReveal for entrance animations.
 * Visual sections (images, grids) reveal immediately (delay 0).
 * Consecutive text sections (titles, subtitles, paragraphs) stagger
 * with increasing delays for a cascading reading reveal effect.
 *
 * Props:
 * - sections:  ordered array of content blocks from a project schema
 * - namespace: i18n namespace used to resolve translation keys
 */
function ProjectRenderer({ sections, namespace }: ProjectRendererProps) {
  const { t } = useTranslation(namespace);

  return (
    <div>
      {sections.map((section, index) => {
        const delay = getDelayForSection(section, index, sections);

        switch (section.type) {

          case "title":
            return (
              <ScrollReveal key={index} delay={delay}>
                <h1>{t(section.i18nKey)}</h1>
              </ScrollReveal>
            );

          case "subtitle":
            return (
              <ScrollReveal key={index} delay={delay}>
                <h2>{t(section.i18nKey)}</h2>
              </ScrollReveal>
            );

          case "paragraph":
            return (
              <ScrollReveal key={index} delay={delay}>
                <p>{t(section.i18nKey)}</p>
              </ScrollReveal>
            );

          case "header":
            return (
              <ScrollReveal key={index} delay={delay}>
                <HeaderImage
                  image={section.image}
                  description={section.description}
                />
              </ScrollReveal>
            );

          case "single-image":
            return (
              <ScrollReveal key={index} delay={delay}>
                <SingleImage
                  image={section.image}
                  description={section.description}
                />
              </ScrollReveal>
            );

          case "image-grid":
            return (
              <ScrollReveal key={index} delay={delay}>
                <ImageGrid images={section.images} />
              </ScrollReveal>
            );

          case "screenshots-grid":
            return (
              <ScrollReveal key={index} delay={delay}>
                <ScreenshotsGrid images={section.images} />
              </ScrollReveal>
            );

          case "button":
            return (
              <ScrollReveal key={index} delay={delay}>
                <CustomButton
                  label={t(section.i18nKey)}
                  href={section.href}
                />
              </ScrollReveal>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default ProjectRenderer;