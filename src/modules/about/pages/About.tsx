import HeaderImage from '../../../core/components/ui/header_image/HeaderImage';
import ScrollReveal from '../../../core/components/ui/scroll_reveal/ScrollReveal';
import YoutubeEmbed from '../../../core/components/ui/youtube_embed/YoutubeEmbed';
import { useTranslation } from '../../../core/i18n/useTranslation';
import header from "../../../assets/images/about/about_70.webp";

import CustomButton from "../../../core/components/ui/custom_button/CustomButton";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./About.module.css";

import SkillGrid from "../../../core/components/ui/skillbadge/Skillgrid";

/**
 * About page component.
 * Displays personal background, software journey, current studies,
 * technologies, media appearances, and timeline.
 *
 * Uses the "about" i18n namespace. Keys are resolved from the root
 * of the about.json file — the namespace itself acts as the root,
 * so keys should NOT be prefixed with "about.".
 *
 * Example:
 *   t("introduction.title") -> about.json -> about.introduction.title
 */
export default function About() {
  const { t } = useTranslation("about");

  return (
    <div>
      <ScrollReveal mode="cascade">

        {/* Page title — maps to about.title */}
        <h1>{t("about.title")}</h1>

        {/* Header image */}
        <HeaderImage
          image={header}
          description=""
        />

        {/* Introduction section — maps to about.introduction */}
        <section>
          <h2>{t("about.introduction.title")}</h2>
          <p>{t("about.introduction.text")}</p>
        </section>

        {/* Software development section — maps to about.software */}
        <section>
          <h2>{t("about.software.title")}</h2>
          <p>{t("about.software.text")}</p>
        </section>

        {/* Current studies section — maps to about.current */}
        <section>
          <h2>{t("about.current.title")}</h2>
          <p>{t("about.current.text")}</p>
        </section>

        {/* Technologies section — maps to about.technologies */}
        <section>
          <h2>{t("about.technologies.title")}</h2>

          {/*
            SkillGrid renders all technology badges as colored pills.
            Each badge has its own Material You color pair derived from
            --md-skill-<key> and --md-skill-on-<key> in tokens.css.
          */}
          <SkillGrid />

          {/*
          <p>{t("about.technologies.android")}</p>
          <p>{t("about.technologies.embedded")}</p>
          <p>{t("about.technologies.web")}</p>
          */}
        </section>

        {/* Media appearance section — maps to about.media */}
        <section>
          <h2>{t("about.media.title")}</h2>
          <p>{t("about.media.description")}</p>
          <p>{t("about.media.video_title")}</p>

          {/*
            Reusable YoutubeEmbed component.
            videoId: the YouTube video identifier
            title:   accessible label for screen readers
            startAt: optional seconds offset (354s in this appearance)
          */}
          <YoutubeEmbed
            videoId="_Ig47f-CQ20"
            startAt={354}
          />
        </section>

        {/* Contact section — maps to about.contact */}
        <section>
          <h2>{t("about.contact.title")}</h2>
          <p>{t("about.contact.description")}</p>

          <div className={styles.contactButtons}>
            <CustomButton
              label="GitHub"
              icon={faGithub}
              href="https://github.com/SRE-0"
            />
            <CustomButton
              label="Email"
              icon={faEnvelope}
              animated
              href="mailto:sergioandresp660@gmail.com"
            />
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}