import './Cita.css'

function Cita({ cita, eliminarCita }) {
  return (
    <div className="Cita">
      <p>Mascota: {cita.mascota}</p>
      <p>Dueño: {cita.dueño}</p>
      <p>Fecha: {cita.fecha}</p>
      <p>Hora: {cita.hora}</p>
      <p>Síntomas: {cita.sintomas}</p>
      <button className='eliminar' onClick={() => eliminarCita(cita.id)}>Eliminar</button>
      <hr />
    </div>
  )
}

export default Cita
