import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../router/routes.constants";
import styles from "./SideDrawer.module.css";
import profile from "../../../../assets/images/profile/profile.webp";
import { useTranslation } from "../../../../core/i18n/useTranslation";

/**
 * ALL_NAV_LINKS
 * Complete list of navigation links shown in the side drawer.
 * This list can be larger than the header tabs — the drawer is the
 * full navigation menu for mobile and a supplemental one for desktop.
 * To add a new route: add it to ROUTES first, then add the entry here.
 */
const ALL_NAV_LINKS = [
  { label: "Home",         path: ROUTES.HOME },
  { label: "Coding",       path: ROUTES.CODING },
  { label: "Competencies", path: ROUTES.COMPETENCIES },
  { label: "About",        path: ROUTES.ABOUT },
];

interface SideDrawerProps {
  /** Controls whether the drawer is visible */
  isOpen: boolean;
  /** Callback fired when the drawer should close (overlay click, link click, Escape key) */
  onClose: () => void;
}

/**
 * SideDrawer
 * A slide-in navigation panel anchored to the right side of the screen.
 * Renders a semi-transparent overlay behind it; clicking the overlay closes the drawer.
 * Traps keyboard focus by listening for the Escape key.
 * Contains ALL_NAV_LINKS — a superset of the header tabs.
 *
 * @param isOpen  - whether the drawer is currently open
 * @param onClose - function to call when the drawer should be dismissed
 */
function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  
  const { t } = useTranslation("common");

  // Close the drawer when Escape is pressed
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay — clicking it closes the drawer */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side drawer panel */}
      <aside
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className={styles.drawerHeader}>
          <img src={profile} alt="Profile picture" className={styles.profile} />
          
          <div className={styles.drawerHeaderRow}>
            <span className={styles.drawerTitle}>Sergio Perez</span>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6"  x2="6"  y2="18" />
                <line x1="6"  y1="6"  x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <p className={styles.bio}>
            {t("Footer.bio")}
          </p>
        </div>

        {/* Navigation links list */}
        <nav className={styles.drawerNav}>
          {ALL_NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`
              }
              onClick={onClose}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default SideDrawer;