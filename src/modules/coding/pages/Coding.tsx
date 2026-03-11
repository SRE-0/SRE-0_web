// Coding.tsx

import ImageContainer from '../../../core/components/ui/screenshots_grid/ScreenshotsGrid'
import HeaderImage from '../../../core/components/ui/header_image/HeaderImage'
import SingleImage from "../../../core/components/ui/single_image/SingleImage"
import ImageGrid from '../../../core/components/ui/image_grid/ImageGrid'

// Import images as modules so Vite processes them and generates
// correct absolute URLs that work both in dev and in GitHub Pages.
// Using src/assets/... as string paths only works in local dev — never in prod.
import imgHome        from '../../../assets/images/projects/teampyros/app/home.webp'
import imgHistory     from '../../../assets/images/projects/teampyros/app/history.webp'
import imgHomeDark    from '../../../assets/images/projects/teampyros/app/home_dark.webp'
import imgHistoryDark from '../../../assets/images/projects/teampyros/app/history_dark.webp'

import imgTeam        from '../../../assets/images/projects/teampyros/images/team.jpg'
import imgTeam0       from '../../../assets/images/projects/teampyros/images/team0.jpg'
import imgTeam1       from '../../../assets/images/projects/teampyros/images/team1.jpg'
import imgTeam2       from '../../../assets/images/projects/teampyros/images/team2.jpg'
import imgTeam4       from '../../../assets/images/projects/teampyros/images/team4.jpg'

import imgHeader      from '../../../assets/images/projects/teampyros/teampyros_80.webp'

// Screenshot images for the app screenshots grid
const screenshots = [
  { image: imgHome,        description: 'Home screen'      },
  { image: imgHistory,     description: 'History screen'   },
  { image: imgHomeDark,    description: 'Home dark screen' },
  { image: imgHistoryDark, description: 'History dark'     },
]

// Team and project images for the image grid
const images = [
  { image: imgTeam,  description: 'Team photo'   },
  { image: imgTeam0, description: 'Team photo 0' },
  { image: imgTeam1, description: 'Team photo 1' },
  { image: imgTeam2, description: 'Team photo 2' },
]

export default function Coding() {
  return (
    <div>
      <h1>TeamPyros</h1>

      <HeaderImage
        image={imgHeader}
        description=""
      />

      <p>TeamPyros es un pequeño equipo...</p>

      <SingleImage
        image={imgTeam}
        description=""
      />

      <p>Nuestro proyecto principal es Avila-Fire...</p>

      <ImageGrid images={images} />

      <p>El sistema integra un vehículo autónomo...</p>

      <h2>Ganadores</h2>
      <SingleImage
        image={imgTeam4}
        description=""
      />

      <h2>Screenshots</h2>
      <ImageContainer images={screenshots} />
    </div>
  )
}