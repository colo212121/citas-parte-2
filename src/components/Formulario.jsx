import { useState } from 'react'
import './Formulario.css'

function Formulario({ agregarCita }) {
  const [mascota, setMascota] = useState('')
  const [dueño, setDueño] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintomas, setSintomas] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const nuevaCita = {
      id: Date.now(),
      mascota: mascota,
      dueño: dueño,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas
    }

    agregarCita(nuevaCita)

    setMascota('')
    setDueño('')
    setFecha('')
    setHora('')
    setSintomas('')
  }

  return (
    <div className="formulario">
      <h2>Crear Cita</h2>
      <form onSubmit={handleSubmit}>
        <input value={mascota} onChange={(e) => setMascota(e.target.value)} placeholder="Mascota" />
        <input value={dueño} onChange={(e) => setDueño(e.target.value)} placeholder="Dueño" />
        <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" />
        <input value={hora} onChange={(e) => setHora(e.target.value)} type="time" />
        <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} placeholder="Síntomas" />
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default Formulario
