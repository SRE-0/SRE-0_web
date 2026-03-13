import styles from "./HomeProjects.module.css"
import { useTranslation } from "../../../../core/i18n/useTranslation"
import { TranslatedText } from "../../../../core/i18n/TranslatedText"
import type { EmbeddedLink } from "../../../../core/i18n/TranslatedText"

//use projects list
import { useCodingProjects }      from "../../../coding/hooks/useCodingProjects";
import { useCompetencyProjects }  from "../../../competencies/hooks/useCompetenciesProject";
import ProjectCard from "../../../shared/projects/ProjectCard"

/*
  HomeProjects renders the projects section of the home page.
  Displays a grid of HomeCard components, one per project.
*/
export default function HomeProjects() {
  const { t } = useTranslation("home")

  const projects = useCodingProjects();
  const competencyProjects = useCompetencyProjects();


  const projectsLinks: EmbeddedLink[] = [
    {
      key: "githubLink",
      text: "GitHub",
      href: "https://github.com/SRE-0",
    },
  ]

  return (
    <div className={styles.projects_container}>
      <h2>{t("projects.title")}</h2>
      <p>
        <TranslatedText text={t("projects.description")} links={projectsLinks} />
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        
        {competencyProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}