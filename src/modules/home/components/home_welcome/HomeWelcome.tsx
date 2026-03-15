import { useTranslation } from "../../../../core/i18n/useTranslation"
import { TranslatedText } from "../../../../core/i18n/TranslatedText"
import type { EmbeddedLink } from "../../../../core/i18n/TranslatedText"
import ScrollReveal from "../../../../core/components/ui/scroll_reveal/ScrollReveal"

/*
  HomeWelcome renders the welcome section of the home page.
  Uses the "home" i18n namespace (locales/en/home.json, locales/es/home.json).
  The intro paragraph uses TranslatedText to embed CustomTextLink components
  at the positions of {{githubLink}} and {{appsLink}} in the translation string.
*/
export default function HomeWelcome() {
  const { t } = useTranslation("home")

  // Links embedded inside the closing paragraph.
  // Each key must match a {{placeholder}} token in the translation string.
  const closingLinks: EmbeddedLink[] = [
    {
      key: "githubLink",
      text: "GitHub",
      href: "https://github.com/SRE-0",
    },
    {
      key: "appsLink",
      text: "apps",
      href: "https://t.me/SRE_dev",
    },
  ]

  return (
    <div>      
      <ScrollReveal mode="cascade">
        <h1>{t("welcome.title")}</h1>
      
        {/* Plain paragraph — no embedded links */}
        <p>{t("welcome.paragraphs.intro")}</p>
      
        <p>{t("welcome.paragraphs.background")}</p>
      
        {/* Paragraph with embedded CustomTextLink components */}
        <TranslatedText
          text={t("welcome.paragraphs.closing")}
          links={closingLinks}
        />
      </ScrollReveal>      
    </div>
  )
}