// Coding.tsx

import ImageContainer from '../../../core/components/ui/screenshots_grid/ScreenshotsGrid'
import HeaderImage from '../../../core/components/ui/header_image/HeaderImage'

import { TEAMPYROS_ASSETS } from '../data/assets/teampyros.assets'

import { useTranslation } from "../../../core/i18n/useTranslation"

import CustomButtom from '../../../core/components/ui/custom_button/CustomButton'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

export default function Coding() {
  const { t } = useTranslation("coding")

  return (
    <div>

      {/* Page Title */}
      <h1>{t("coding_projects.project2.title")}</h1>

      {/* Header image */}
      <HeaderImage
        image={TEAMPYROS_ASSETS.header}
        description=""
      />

      <p>{t("coding_projects.project2.body.monitoring")}</p>
      <p>{t("coding_projects.project2.body.emergency")}</p>
      <p>{t("coding_projects.project2.body.technology")}</p>

      {/* Screenshots */}
      <h2>Screenshots</h2>

      <ImageContainer images={TEAMPYROS_ASSETS.screenshots} />

      <h2>{t("coding_projects.donwload")}</h2>
      <p>{t("coding_projects.donwload_description")}</p>

      <CustomButtom 
        label="GitHub" 
        icon={faGithub}
        href='https://github.com/SRE-0'
        />

    </div>
  )
}