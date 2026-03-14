import styles from "./HomeProjects.module.css"
import { useTranslation } from "../../../../core/i18n/useTranslation"
import { TranslatedText } from "../../../../core/i18n/TranslatedText"
import type { EmbeddedLink } from "../../../../core/i18n/TranslatedText"
import { useCodingProjects }      from "../../../coding/hooks/useCodingProjects";
import { useCompetencyProjects }  from "../../../competencies/hooks/useCompetenciesProject";
import ProjectCard   from "../../../shared/projects/ProjectCard"
import ScrollReveal  from "../../../../core/components/ui/scroll_reveal/ScrollReveal"

/*
 * HomeProjects
 * Renders the projects section of the home page.
 * Each element animates in independently as it enters the viewport:
 * - Title and description stagger with delays 0 and 1.
 * - Each ProjectCard gets its own ScrollReveal so they cascade as the
 *   user scrolls through the grid.
 */
export default function HomeProjects() {
  const { t } = useTranslation("home")

  const projects            = useCodingProjects();
  const competencyProjects  = useCompetencyProjects();

  const projectsLinks: EmbeddedLink[] = [
    {
      key:  "githubLink",
      text: "GitHub",
      href: "https://github.com/SRE-0",
    },
  ]

  return (
    <div className={styles.projects_container}>

      <ScrollReveal delay={0}>
        <h2>{t("projects.title")}</h2>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <p>
          <TranslatedText text={t("projects.description")} links={projectsLinks} />
        </p>
      </ScrollReveal>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delay={(index % 4) as 0 | 1 | 2 | 3 | 4}
            className={styles.cardWrapper}
          >
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}

        {competencyProjects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delay={(index % 4) as 0 | 1 | 2 | 3 | 4}
            className={styles.cardWrapper}
          >
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}