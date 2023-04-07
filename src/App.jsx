import './App.css'
import Navbar from './componentes/Navbar'
import { Route, Routes } from 'react-router-dom'
import { rutasPag } from './RutasPage'
import Inicio from './paginas/Inicio'
import Personajes from './paginas/Personajes'
import Comics from './paginas/Comics'
import Series from './paginas/Series'

function App() {
 

  return (
    <div className="App">

      <Navbar/>


      <Routes>

            <Route path={rutasPag.inicio} element={<Inicio/>}/>
            <Route path={rutasPag.personaje} element={<Personajes/>}/>
            <Route path={rutasPag.comics} element={<Comics/>}/>
            <Route path={rutasPag.series} element={<Series/>}/>

      </Routes>


    </div>
    
  )
}

export default App

