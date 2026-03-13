// modules/shared/footer/Footer.tsx

import styles from "./Footer.module.css";
import { useTranslation } from "../../../../core/i18n/useTranslation";
import { CustomTextLink } from "../../ui/custom_text_link/CustomTextLink";

/**
 * CustomFooter
 * Simple footer component rendered on every page.
 * Displays contact info (name, bio, email) and copyright notice.
 * No props required — static content pulled from i18n common namespace.
 */
function CustomFooter() {
  const { t } = useTranslation("common");

  return (
    <footer className={styles.footer}>

      {/* Inner content wrapper — caps max width and centers everything */}
      <div className={styles.inner}>

        {/* Section heading */}
        <p className={styles.title}>
          {t("Footer.contact")}
        </p>

        {/* Contact info block */}
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

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Copyright row */}
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Sergio Perez. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default CustomFooter;