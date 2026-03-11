import styles from "./Footer.module.css";
import { useTranslation } from "../../../../core/i18n/useTranslation"
import { CustomTextLink } from "../../ui/custom_text_link/CustomTextLink";

/**
 * CustomFooter
 * Simple footer component rendered on every page.
 * Displays contact info (name, bio, email) and copyright notice.
 * No props required — static content.
 */
function CustomFooter() {
  const { t } = useTranslation("common")

  return (
    <footer className={styles.footer}>

      {/* Section title */}
      <p className={styles.title}>
        {t("Footer.contact")}
      </p>

      {/* Contact info block — each item is its own element for consistent spacing */}
      <div className={styles.contactBlock}>
        <p className={styles.name}>
          Sergio Perez
        </p>
        <p className={styles.bio}>
          {t("Footer.bio")}
        </p>
        <CustomTextLink
          text="sergioandresp660@gmail.com"
          addressLink="mailto:sergioandresp660@gmail.com"
        />
      </div>

      <hr className={styles.divider} />

      {/* Copyright row */}
      <div className={styles.layout}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Sergio Perez.
        </p>
      </div>

    </footer>
  );
}

export default CustomFooter;