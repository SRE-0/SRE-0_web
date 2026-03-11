import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../router/routes.constants";
import styles from "./Header.module.css";
import ThemeToggle from "../../ui/theme_toggle/ThemeToggle";

/**
 * NAV_LINKS
 * Driven by ROUTES constants instead of hardcoded strings.
 * To add a new tab: add the route in routes.constants.ts first,
 * then add the entry here.
 */
const NAV_LINKS = [
  { label: "Coding",       path: ROUTES.CODING },
  { label: "Competencies", path: ROUTES.COMPETENCIES },
  { label: "About",        path: ROUTES.ABOUT },
];

/**
 * HamburgerIcon
 * Renders either a hamburger (three lines) or a close (X) icon
 * depending on whether the menu is open.
 * @param isOpen - controls which icon is displayed
 */
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {isOpen ? (
        // X icon — close menu
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        // Hamburger icon — open menu
        <>
          <line x1="3" y1="6"  x2="21" y2="6"  />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

/**
 * Header
 * Global navigation header rendered on every page.
 * On large screens: shows nav tabs horizontally.
 * On small screens: hides nav and shows a hamburger toggle button.
 * No props required — navigation items are defined in NAV_LINKS above.
 */
function Header() {
  // Controls whether the mobile nav is expanded or collapsed
  const [menuOpen, setMenuOpen] = useState(false);

  // Closes the menu when a nav link is clicked
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        {/* Hamburger button — only visible on mobile via CSS */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <HamburgerIcon isOpen={menuOpen} />
        </button>
        
        <NavLink to={ROUTES.HOME} className={styles.logoLink}>
          <span className={styles.logo}>Sergio Perez</span>
        </NavLink>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        {NAV_LINKS.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
            onClick={handleNavClick}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;