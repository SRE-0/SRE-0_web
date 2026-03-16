
import HeaderImage from '../../../../core/components/ui/header_image/HeaderImage'
import ScrollReveal from '../../../../core/components/ui/scroll_reveal/ScrollReveal'
import { useTranslation } from '../../../../core/i18n/useTranslation'
import header from "../../../../assets/images/projects/coding_60.webp";


export default function CodingHeader() {
  const { t } = useTranslation("coding")

  return (
    <div>
        <ScrollReveal mode='cascade'>
            {/* Page Title */}
            <h1>{t("title")}</h1>
        
            {/* Header image */}
            <HeaderImage
            image={header}
            description=""
            />

            <p>{t("description")}</p>
        </ScrollReveal>
    </div>
  )
}
