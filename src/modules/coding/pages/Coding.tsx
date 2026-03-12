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

      <p>TeamPyros es un pequeño equipo de jóvenes entusiastas de la electrónica, la robótica y la programación que comparte un mismo objetivo: enfrentar problemas reales de la vida cotidiana mediante soluciones tecnológicas ingeniosas. Nuestro trabajo combina investigación, experimentación y desarrollo práctico, buscando siempre crear sistemas que no solo funcionen en teoría, sino que puedan aplicarse en escenarios reales donde la tecnología pueda marcar una diferencia significativa.</p>

      <SingleImage
        image={imgTeam}
        description=""
      />

      <p>Nuestro proyecto principal es Avila-Fire, un sistema autónomo de prevención y control de incendios diseñado para actuar de manera temprana ante situaciones de riesgo. La propuesta está pensada tanto para entornos civiles —como viviendas, galpones o instalaciones industriales— como para espacios exteriores con presencia de vegetación, donde los incendios pueden propagarse con rapidez. El objetivo del sistema es detectar, reaccionar y mitigar el fuego antes de que se convierta en una amenaza mayor.</p>

      <ImageGrid images={images} />

      <p>El sistema integra un vehículo autónomo equipado con sensores y mecanismos de extinción, conectado a la red mediante una aplicación que permite supervisar en tiempo real el estado del sistema. A través de esta plataforma es posible monitorear datos como el nivel de agua u otros agentes extintores, el estado de la batería, la temperatura del entorno y distintos eventos relevantes, incluyendo fugas de gases tóxicos o inflamables y detección temprana de incendios. Estos últimos se identifican mediante una red de sensores distribuidos estratégicamente en el área a proteger. Además, el sistema contempla la posibilidad de comunicarse de forma automática con los servicios de emergencia de la región, con el fin de maximizar las probabilidades de controlar el incendio y reducir los riesgos para las personas y el entorno.</p>

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