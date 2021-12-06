 import React from "react";
 import axios from "axios";
 
 
 const PersonasDetalle = (props) => {
   return (
     <>
       <div className="row">
         <div className="col s12 m6">
           <div className="card pink darken-3">
             <div className="card-content white-text">
             <span className="card-title">{ props.persona.nombre_juego} </span>
                <p>Tipo de juego: { props.persona.tipo_juego }</p>
                <p>Descripcion:  { props.persona.caracteristica }</p>
                <p>Empresa: { props.persona.empresa }</p>
             </div>
             <div className="card-action">
               <form onSubmit={function (event) {                
                 event.preventDefault();
                 const url = `http://localhost:5000/personas/${props.persona._id}`;
                 axios.delete(url,{ data: { answer: 42 } })
                   .then((respuesta) => console.log(respuesta.data))
                   .catch((error) => console.log(error ))
               }}>
                 <button
                   type="submit"
                   name="action"
                   className="waves-effect  pink lighten-4 btn">
                   Eliminar
                 </button>
               </form>
             </div>
           </div>
         </div>
       </div>
     </>
 
   )
 }
 
 
 export default PersonasDetalle