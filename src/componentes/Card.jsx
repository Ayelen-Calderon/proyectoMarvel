

import "../hoja-de-estilos/cards.css"

const CardPersonaje = ({value, titulo}) => {
  

 

  return (
     <div className="contenedorCard">
      
        {value.map(value => (
           <div className="card" key={value.id}>
              <h3>{`${value}.${titulo}`}</h3>
             <img className="card-img"  src={`${value.thumbnail.path}.${value.thumbnail.extension}`}  alt=""/>
           </div>
       ))}
           
      </div>
  )
}

export default CardPersonaje
