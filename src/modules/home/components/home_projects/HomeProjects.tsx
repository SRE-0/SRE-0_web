// HomeProjects.tsx
import { useTranslation }        from "../../../../core/i18n/useTranslation"
import { TranslatedText }        from "../../../../core/i18n/TranslatedText"
import type { EmbeddedLink }     from "../../../../core/i18n/TranslatedText"
import { useCodingProjects }     from "../../../coding/hooks/useCodingProjects"
import { useCompetencyProjects } from "../../../competencies/hooks/useCompetenciesProject"
import ProjectGrid from "../../../shared/projects/ProjectGrid"
import ScrollReveal              from "../../../../core/components/ui/scroll_reveal/ScrollReveal"

/*
 * HomeProjects
 * Renders the projects section of the home page.
 * Delegates grid rendering to ProjectGrid, keeping this component
 * focused only on layout, translations, and data fetching.
 */
export default function HomeProjects() {
  const { t } = useTranslation("home")

  const codingProjects     = useCodingProjects()
  const competencyProjects = useCompetencyProjects()

  const allProjects = [...codingProjects, ...competencyProjects]

  const projectsLinks: EmbeddedLink[] = [
    {
      key:  "githubLink",
      text: "GitHub",
      href: "https://github.com/SRE-0",
    },
  ]

  return (
    <div>
      <ScrollReveal mode="cascade">
        <h2>{t("projects.title")}</h2>
      
        <p>
          <TranslatedText text={t("projects.description")} links={projectsLinks} />
        </p>
      
        <ProjectGrid projects={allProjects} />
      </ScrollReveal>

    </div>
  )
}