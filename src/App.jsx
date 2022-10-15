import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { generarId } from './helpers'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [ modal, setModal ] = useState(false);
  const [animarModal, setAnimarModal] =useState(false)

  const [ gastos, setGastos ] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true)
    }, 300)
  }
  const guardarGasto = gasto => {
    gasto.id = generarId();
		setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
	}
  return (
    <div className="App">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      ></Header>
      {isValidPresupuesto && (
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt="Icono agregar nuevo gasto" 
              onClick={handleNuevoGasto}  
            />
          </div>
        )
      }
      {modal && <Modal 
                  setModal={setModal}
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}
                />}
    </div>
  )
}

export default App