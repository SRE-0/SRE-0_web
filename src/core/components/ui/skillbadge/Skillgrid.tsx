import {
  faAndroid,
  faGitAlt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faCode,
  faCube,
  faDatabase,
  faFire,
  faLayerGroup,
  faMicrochip,
  faMobile,
  faPalette,
  faServer,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import SkillBadge from "./Skillbadge";
import styles from "./Skillgrid.module.css";

/**
 * SkillGrid component.
 *
 * Renders all technology skill badges grouped by area of expertise.
 * Each badge receives:
 *   - icon      : FontAwesome icon that visually represents the tech
 *   - label     : display name of the technology
 *   - colorKey  : maps to a CSS variable pair in tokens.css
 *                 (--md-skill-<key> and --md-skill-on-<key>)
 *
 * To add a new skill:
 *   1. Add a new entry to the relevant group in SKILL_GROUPS below.
 *   2. Add the corresponding --md-skill-<key> and --md-skill-on-<key>
 *      variables to tokens.css (all four sections: root, media dark,
 *      data-theme light, data-theme dark).
 */

interface Skill {
  icon: typeof faMobile;
  label: string;
  colorKey: string;
}

interface SkillGroup {
  /* Group heading displayed above the badges */
  title: string;
  skills: Skill[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Android & Mobile",
    skills: [
      { icon: faMobile,     label: "Kotlin",           colorKey: "kotlin"    },
      { icon: faCube,       label: "Java",             colorKey: "java"      },
      { icon: faAndroid,    label: "Android SDK",      colorKey: "android"   },
      { icon: faLayerGroup, label: "MVVM",             colorKey: "mvvm"      },
      { icon: faServer,     label: "ViewModels",       colorKey: "viewmodel" },
      { icon: faDatabase,   label: "SQLite",           colorKey: "sqlite"    },
      { icon: faDatabase,   label: "Room",             colorKey: "room"      },
      { icon: faFire,       label: "Firebase",         colorKey: "firebase"  },
      { icon: faPalette,    label: "Material Design 3",colorKey: "md3"       },
    ],
  },
  {
    title: "Embedded & Electronics",
    skills: [
      { icon: faMicrochip, label: "ESP32",        colorKey: "esp32"    },
      { icon: faWrench,    label: "Sensors",      colorKey: "sensors"  },
      { icon: faCode,      label: "Embedded C",   colorKey: "embedded" },
    ],
  },
  {
    title: "Web & Cross-platform",
    skills: [
      { icon: faReact,  label: "React",        colorKey: "react"       },
      { icon: faMobile, label: "React Native", colorKey: "reactnative" },
      { icon: faMobile, label: "Expo",         colorKey: "expo"        },
      { icon: faCode,   label: "TypeScript",   colorKey: "typescript"  },
      { icon: faJs,     label: "JavaScript",   colorKey: "javascript"  },
      { icon: faCode,   label: "HTML & CSS",   colorKey: "htmlcss"     },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: faGitAlt, label: "Git", colorKey: "git" },
    ],
  },
];

export default function SkillGrid() {
  return (
    <div className={styles.groups}>
      {SKILL_GROUPS.map((group) => (
        <div key={group.title} className={styles.group}>

          {/* Group label */}
          <span className={styles.groupTitle}>{group.title}</span>

          {/* Badge row for this group */}
          <div className={styles.grid}>
            {group.skills.map((skill) => (
              <SkillBadge
                key={skill.colorKey}
                icon={skill.icon}
                label={skill.label}
                colorKey={skill.colorKey}
              />
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}