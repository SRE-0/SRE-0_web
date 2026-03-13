// modules/coding/data/assets/teampyros.assets.ts
import type { ProjectImageItem } from "../../../shared/types/project-assets.types";

import header           from "../../../../assets/images/projects/teampyros/teampyros_80.webp";
import team             from "../../../../assets/images/projects/teampyros/images/team.jpg";
import team0            from "../../../../assets/images/projects/teampyros/images/team0.jpg";
import team1            from "../../../../assets/images/projects/teampyros/images/team1.jpg";
import team2            from "../../../../assets/images/projects/teampyros/images/team2.jpg";
import team3            from "../../../../assets/images/projects/teampyros/images/team3.jpg";
import team4            from "../../../../assets/images/projects/teampyros/images/team4.jpg";
import team5            from "../../../../assets/images/projects/teampyros/images/team5.jpg";
import car              from "../../../../assets/images/projects/teampyros/images/e.webp";

// Shape of a project's complete asset bundle.
export interface ProjectAssets {
  header:      string;
  gallery:     ProjectImageItem[];
  imgTeam:     string;
  imgCar:      string;
  winner:      string;
}

// All resolved image URLs for the TeamPyros project.
// Typed explicitly as ProjectAssets so arrays remain mutable and
// compatible with components that expect ImageItem[].
export const TEAMPYROS_ASSETS: ProjectAssets = {
  header,
  gallery: [
   
    { image: team0, description: "Team photo" },
    { image: team5, description: "Team photo" },
    { image: team2, description: "Team photo" },
    { image: team3, description: "Team photo" },
    { image: team1, description: "Team photo" },
  ],
  imgTeam: team,
  imgCar:  car,
  winner:  team4,
};