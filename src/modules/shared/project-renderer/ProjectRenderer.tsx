// modules/shared/project-renderer/ProjectRenderer.tsx

import { useTranslation }   from "../../../core/i18n/useTranslation";
import HeaderImage          from "../../../core/components/ui/header_image/HeaderImage";
import SingleImage          from "../../../core/components/ui/single_image/SingleImage";
import ImageGrid            from "../../../core/components/ui/image_grid/ImageGrid";
import ScreenshotsGrid      from "../../../core/components/ui/screenshots_grid/ScreenshotsGrid";
import CustomButton         from "../../../core/components/ui/custom_button/CustomButton";
import type { ProjectSection } from "../types/project-schema.types";

interface ProjectRendererProps {
  sections:  ProjectSection[];
  namespace: string;   // i18n namespace: "coding" | "competencies"
}

/*
 * ProjectRenderer
 * Iterates a ProjectSection[] and maps each entry to its UI component.
 * This is the only place that knows how to render each section type.
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
        switch (section.type) {

          case "title":
            return <h1 key={index}>{t(section.i18nKey)}</h1>;

          case "subtitle":
            return <h2 key={index}>{t(section.i18nKey)}</h2>;

          case "paragraph":
            return <p key={index}>{t(section.i18nKey)}</p>;

          case "header":
            return (
              <HeaderImage
                key={index}
                image={section.image}
                description={section.description}
              />
            );

          case "single-image":
            return (
              <SingleImage
                key={index}
                image={section.image}
                description={section.description}
              />
            );

          case "image-grid":
            return <ImageGrid key={index} images={section.images} />;

          case "screenshots-grid":
            return <ScreenshotsGrid key={index} images={section.images} />;

          case "button":
            return (
              <CustomButton
                key={index}
                label={t(section.i18nKey)}
                //icon={section.icon}
                href={section.href}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default ProjectRenderer;