// Coding.tsx

import ImageContainer from '../../../core/components/ui/screenshots_grid/ScreenshotsGrid'
import HeaderImage from '../../../core/components/ui/header_image/HeaderImage'
import SingleImage from "../../../core/components/ui/single_image/SingleImage"
import ImageGrid from '../../../core/components/ui/image_grid/ImageGrid'

import { TEAMPYROS_ASSETS } from '../data/assets/teampyros.assets'

export default function Coding() {
  return (
    <div>
      <h1>TeamPyros</h1>

      <HeaderImage
        image={TEAMPYROS_ASSETS.header}
        description=""
      />

      <p>TeamPyros es un pequeño equipo de jóvenes entusiastas de la electrónica, la robótica y la programación que comparte un mismo objetivo: enfrentar problemas reales de la vida cotidiana mediante soluciones tecnológicas ingeniosas. Nuestro trabajo combina investigación, experimentación y desarrollo práctico, buscando siempre crear sistemas que no solo funcionen en teoría, sino que puedan aplicarse en escenarios reales donde la tecnología pueda marcar una diferencia significativa.</p>

      <SingleImage
        image={TEAMPYROS_ASSETS.imgTeam}
        description=""
      />

      <p>Nuestro proyecto principal es Avila-Fire, un sistema autónomo de prevención y control de incendios diseñado para actuar de manera temprana ante situaciones de riesgo. La propuesta está pensada tanto para entornos civiles —como viviendas, galpones o instalaciones industriales— como para espacios exteriores con presencia de vegetación, donde los incendios pueden propagarse con rapidez. El objetivo del sistema es detectar, reaccionar y mitigar el fuego antes de que se convierta en una amenaza mayor.</p>

      <ImageGrid images={TEAMPYROS_ASSETS.gallery}/>

      <p>El sistema integra un vehículo autónomo equipado con sensores y mecanismos de extinción, conectado a la red mediante una aplicación que permite supervisar en tiempo real el estado del sistema. A través de esta plataforma es posible monitorear datos como el nivel de agua u otros agentes extintores, el estado de la batería, la temperatura del entorno y distintos eventos relevantes, incluyendo fugas de gases tóxicos o inflamables y detección temprana de incendios. Estos últimos se identifican mediante una red de sensores distribuidos estratégicamente en el área a proteger. Además, el sistema contempla la posibilidad de comunicarse de forma automática con los servicios de emergencia de la región, con el fin de maximizar las probabilidades de controlar el incendio y reducir los riesgos para las personas y el entorno.</p>

      <h2>Ganadores</h2>
      <SingleImage
        image={TEAMPYROS_ASSETS.winner}
        description=""
      />

      <h2>Screenshots</h2>
      <ImageContainer images={TEAMPYROS_ASSETS.screenshots} />
    </div>
  )
}