// modules/coding/data/assets/teampyros.assets.ts

import header           from "../../../../assets/images/projects/teampyros/teampyros_80.webp";
import team             from "../../../../assets/images/projects/teampyros/images/team.jpg";
import team0            from "../../../../assets/images/projects/teampyros/images/team0.jpg";
import team1            from "../../../../assets/images/projects/teampyros/images/team1.jpg";
import team2            from "../../../../assets/images/projects/teampyros/images/team2.jpg";
import team4            from "../../../../assets/images/projects/teampyros/images/team4.jpg";
import appHome          from "../../../../assets/images/projects/teampyros/app/home.webp";
import appHomeDark      from "../../../../assets/images/projects/teampyros/app/home_dark.webp";
import appHistory       from "../../../../assets/images/projects/teampyros/app/history.webp";
import appHistoryDark   from "../../../../assets/images/projects/teampyros/app/history_dark.webp";


// Reusable type for a single image entry with a description.
// Must match the ImageItem type expected by ImageGrid and ImageContainer.
export interface ProjectImageItem {
  image:       string;
  description: string;
}

// Shape of a project's complete asset bundle.
export interface ProjectAssets {
  header:      string;
  gallery:     ProjectImageItem[];
  screenshots: ProjectImageItem[];
  imgTeam:     string;
  winner:      string;
}

// All resolved image URLs for the TeamPyros project.
// Typed explicitly as ProjectAssets so arrays remain mutable and
// compatible with components that expect ImageItem[].
export const TEAMPYROS_ASSETS: ProjectAssets = {
  header,
  gallery: [
    { image: team,  description: "Team photo"   },
    { image: team0, description: "Team photo 0" },
    { image: team1, description: "Team photo 1" },
    { image: team2, description: "Team photo 2" },
  ],
  screenshots: [
    { image: appHome,        description: "Home screen"    },
    { image: appHistory,     description: "History screen" },
    { image: appHomeDark,    description: "Home screen"    },
    { image: appHistoryDark, description: "History screen" },
  ],
  imgTeam: team,
  winner: team4,
};