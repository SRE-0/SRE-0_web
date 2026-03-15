// modules/coding/data/assets/teampyros.assets.ts
import type { ProjectImageItem } from "../../../shared/types/project-assets.types";

import header           from "../../../../assets/images/projects/teampyros/app/teampyros-app_60.webp";
import appHome          from "../../../../assets/images/projects/teampyros/app/home.webp";
import appHomeDark      from "../../../../assets/images/projects/teampyros/app/home_dark.webp";
import appHistory       from "../../../../assets/images/projects/teampyros/app/history.webp";
import appHistoryDark   from "../../../../assets/images/projects/teampyros/app/history_dark.webp";

// Shape of a project's complete asset bundle.
export interface ProjectAssets {
  header:      string;
  screenshots: ProjectImageItem[];
}

// All resolved image URLs for the TeamPyros project.
// Typed explicitly as ProjectAssets so arrays remain mutable and
// compatible with components that expect ImageItem[].
export const TEAMPYROS_ASSETS: ProjectAssets = {
  header,
  screenshots: [
    { image: appHome,        description: "Home screen"    },
    { image: appHistory,     description: "History screen" },
    { image: appHomeDark,    description: "Home screen"    },
    { image: appHistoryDark, description: "History screen" },
  ],
};