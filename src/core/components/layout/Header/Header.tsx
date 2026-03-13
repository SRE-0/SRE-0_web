import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../router/routes.constants";
import styles from "./Header.module.css";
import profile from "../../../../assets/images/profile/profile.webp";
import HamburgerIcon from "./HamburgerIcon";
import SideDrawer from "../side_drawer/SideDrawer";

/**
 * HEADER_NAV_LINKS
 * Links shown as horizontal tabs in the desktop header.
 * This is intentionally a subset of ALL_NAV_LINKS in SideDrawer —
 * only the most important sections appear in the tab bar.
 * To add a new tab: add the route in routes.constants.ts first,
 * then add the entry here.
 */
const HEADER_NAV_LINKS = [
  { label: "Coding",       path: ROUTES.CODING },
  { label: "Competencies", path: ROUTES.COMPETENCIES },
  { label: "About",        path: ROUTES.ABOUT },
];

/**
 * Header
 * Global navigation header rendered on every page.
 *
 * Desktop: shows horizontal nav tabs.
 * Mobile: hides tabs and shows a hamburger button that opens a SideDrawer
 *         with the full navigation (ALL_NAV_LINKS defined inside SideDrawer).
 *
 * No props required — all navigation items are defined in their respective
 * link constant arrays.
 */
function Header() {
  // Controls whether the SideDrawer is open
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer  = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>

          <img src={profile} alt="Profile picture" className={styles.profile} />

          <NavLink to={ROUTES.HOME} className={styles.logoLink}>
            <span className={styles.logo}>
              <span className={styles.logoHighlight}>Sergio</span> Pérez
            </span>
          </NavLink>

          {/* Hamburger button — visible on mobile, opens the SideDrawer */}
          <button
            className={styles.hamburger}
            onClick={openDrawer}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="side-drawer"
          >
            <HamburgerIcon isOpen={drawerOpen} />
          </button>
        </div>

        {/* Desktop horizontal tab navigation */}
        <nav className={styles.nav} aria-label="Main navigation">
          {HEADER_NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Side drawer — rendered outside <header> to avoid z-index/stacking issues */}
      <SideDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
      />
    </>
  );
}

export default Header;