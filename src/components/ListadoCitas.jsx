import Cita from './Cita.jsx'
import './ListadoCitas.css'

function ListadoCitas({ citas, eliminarCita }) {
  return (
    <div className='listado'>
      <h2>Listado de Citas</h2>

      {citas.length === 0 && <p><strong>No hay citas todavía</strong></p>}

      {citas.map((cita) => (
        <div className='cita'>
          <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        </div>
      ))}
    </div>
  )
}

export default ListadoCitas
