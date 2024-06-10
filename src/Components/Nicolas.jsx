import React from 'react'
import '../Styles/Nicolas.css'
import Nicolasimg from '../Img/chicomini4.jpg'
const Nicolas = () => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <img src={Nicolasimg} alt="Nicolas" className="nicolas-image" />
      </div>
      <div className="modal-body">
        <h2>Nicolas</h2>
        <p>
          Características del capitalismo:
          El capitalismo, o más concretamente los sistemas económicos capitalistas, se caracterizan por la presencia de unos ciertos elementos de tipo socioeconómico, pues si un número importante de ellos está ausente el sistema no puede ser considerado como propiamente capitalista. Sus características son las siguientes:
        </p>
        <ul>
          <li>El tipo de propiedad de los medios de producción son en su mayor parte privada.</li>
          <li>Las personas son legalmente poseedoras de su fuerza de trabajo, y libres de venderla (o retenerla) a otros.</li>
          <li>La producción está generalmente orientada más hacia la obtención de beneficio que para satisfacer las necesidades humanas.</li>
          <li>Los mercados desempeñan un papel importante en la asignación de insumos a la producción de productos básicos y en la determinación de la cantidad y la dirección de la inversión.</li>
        </ul>
        <p>
          En términos más descriptivos, los sistemas capitalistas son sistemas socioeconómicos donde los activos de capital están básicamente en manos privadas y son controlados por agentes o personas privadas. El trabajo es proporcionado mediante el ofrecimiento de salarios monetarios y la aceptación libre por parte de los empleados. La actividad económica frecuentemente está organizada para obtener un beneficio neto que permita a las personas propietarias que controlan los medios de producción incrementar su capital. Los bienes y servicios producidos son además distribuidos mediante mecanismos de mercado.
        </p>
      </div>
    </div>
  )
}

export default Nicolas