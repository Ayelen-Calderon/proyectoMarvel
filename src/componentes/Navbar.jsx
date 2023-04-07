import "../hoja-de-estilos/nav.css"
import { rutasPag } from "../RutasPage"
import { Link , useNavigate } from "react-router-dom"

const Navbar = () => {


  const navigate = useNavigate()
 

  return (
    <div className='nav'>
      <nav className="barra"> 
      <h3 className="link-nav" onClick={()=>navigate(-1)} >Atras</h3>
      <Link className="link-nav" to={rutasPag.inicio}><h3>Inicio</h3></Link>
      <Link className="link-nav"  to={rutasPag.personaje}><h3>Personajes</h3></Link>
      <Link className="link-nav"  to={rutasPag.series}><h3>Series</h3></Link>
      <Link className="link-nav"  to={rutasPag.comics} ><h3>Comics</h3></Link>
    
      </nav>
      
    </div>
  )
}

export default Navbar
