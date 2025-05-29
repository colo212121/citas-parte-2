import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Formulario from './components/Formulario.jsx'
import ListadoCitas from './components/ListadoCitas.jsx'
import './App.css'

function App() {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas')
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas))
    }
  }, [])

  useEffect(() => {
    if(citas.length !== 0){
      localStorage.setItem('citas', JSON.stringify(citas))
    }
  }, [citas])

  function agregarCita(cita) {
    setCitas([...citas, cita])
  }

  function eliminarCita(id) {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
    // traer citas
    // de citas eliminar el cita que tenga el id que se trae
    // setitem de nuevas citas
    localStorage.setItem('citas', JSON.stringify(nuevasCitas))
  }

  return (
    <>
      <Header />
      <div className="contenedor">
        <Formulario agregarCita={agregarCita} />
        <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
      </div>
    </>
  )
}

export default App
