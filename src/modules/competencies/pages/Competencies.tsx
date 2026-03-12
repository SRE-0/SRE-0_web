// Coding.tsx

import HeaderImage from '../../../core/components/ui/header_image/HeaderImage'
import SingleImage from "../../../core/components/ui/single_image/SingleImage"
import ImageGrid from '../../../core/components/ui/image_grid/ImageGrid'

import { TEAMPYROS_ASSETS } from '../data/assets/teampyros.assets'
import { useTranslation } from "../../../core/i18n/useTranslation"

/*
  Coding Page

  This page renders the detailed information about the TeamPyros project.
  All textual content is loaded from the i18n JSON files using the
  translation hook, allowing the page to support multiple languages.

  Sections rendered:
  - Project header
  - About the team
  - Project origin
  - Robotic solution
  - System explanation
  - Team trajectory and awards
*/

export default function Competencies() {
  const { t } = useTranslation("competencies")

  return (
    <div>

      {/* Page Title */}
      <h1>{t("competencies_projects.project1.title")}</h1>

      {/* Header image */}
      <HeaderImage
        image={TEAMPYROS_ASSETS.header}
        description=""
      />

      <p>{t("competencies_projects.project1.body.about.paragraphs.p1")}</p>
      <p>{t("competencies_projects.project1.body.about.paragraphs.p2")}</p>

      <SingleImage
        image={TEAMPYROS_ASSETS.imgTeam}
        description=""
      />

      {/* ORIGIN SECTION */}
      <h2>{t("competencies_projects.project1.body.origin.subtitle")}</h2>

      <p>{t("competencies_projects.project1.body.origin.paragraphs.p1")}</p>
      <p>{t("competencies_projects.project1.body.origin.paragraphs.p2")}</p>

      {/* SOLUTION SECTION */}
      <h2>{t("competencies_projects.project1.body.solution.subtitle")}</h2>

      <p>{t("competencies_projects.project1.body.solution.paragraphs.p1")}</p>
      <p>{t("competencies_projects.project1.body.solution.paragraphs.p2")}</p>
      <p>{t("competencies_projects.project1.body.solution.paragraphs.p3")}</p>

      <SingleImage
        image={TEAMPYROS_ASSETS.imgCar}
        description=""
      />

      {/* SYSTEM SECTION */}
      <h2>{t("competencies_projects.project1.body.system.subtitle")}</h2>

      <p>{t("competencies_projects.project1.body.system.paragraphs.p1")}</p>
      <p>{t("competencies_projects.project1.body.system.paragraphs.p2")}</p>
      <p>{t("competencies_projects.project1.body.system.paragraphs.p3")}</p>
      <p>{t("competencies_projects.project1.body.system.paragraphs.p4")}</p>

      {/* TRAJECTORY SECTION */}
      <h2>{t("competencies_projects.project1.body.trajectory.subtitle")}</h2>

      <p>{t("competencies_projects.project1.body.trajectory.paragraphs.p1")}</p>
      <p>{t("competencies_projects.project1.body.trajectory.paragraphs.p2")}</p>

      <SingleImage
        image={TEAMPYROS_ASSETS.winner}
        description=""
      />

      <h2>{t("competencies_projects.project1.body.gallery")}</h2>
      <ImageGrid images={TEAMPYROS_ASSETS.gallery}/>

    </div>
  )
}