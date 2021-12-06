import React from "react";

const PersonasLista = ( props ) =>{
    return(
        <ul className="collection with-header">
            <li className="collection-header"><h4>Juegos</h4></li>
            {
                props.lista.map( (elemento)=> {
                    return(
                        <li 
                            className="collection-item"
                            key={ elemento._id }
                            onClick = {props.actualizarPersona.bind(this, elemento)}
                        >
                            {elemento.nombre_juego}
                        </li>
                    )
                })
            }
            
      </ul>
    )
}

export default PersonasLista

