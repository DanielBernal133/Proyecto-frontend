import React from "react";
import axios from "axios";

class PersonasForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    submitNuevaPersona( event ){
        event.preventDefault();
        //Hacer la peticion via axios
        axios.post('http://localhost:5000/personas' , {
            nombre_juego: this.refs.nombre.value,
            tipo_juego: this.refs.tipo_juego.value,
            caracteristica: this.refs.caracteristica.value,
            empresa: this.refs.empresa.value
        }).then((respuesta)=>{
            console.log(respuesta)
        }).catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <div className="row">
                <h1 className="center">Nuevo Juego</h1>
                <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)}>
                <div classNameName="row">
                    <div className="input-field col s6">
                        <input ref="nombre" id="nombre" type="text" />
                        <label htmlfor="nombre">Nombre juego</label>
                    </div>
                </div>
                <div classNameName="row">
                    <div className="input-field col s6">
                        <input ref="tipo_juego" id="tipo_juego" type="text" />
                        <label htmlfor="tipo_juego">Tipo de juego</label>
                    </div>
                    <div className="input-field col s6">
                        <input ref="caracteristica" id="caracteristica" type="text" />
                        <label htmlfor="caracteristica">Caracteristicas</label>
                    </div>
                </div>
                <div classNameName="row">
                    <div className="input-field col s6">
                        <input ref="empresa" id="empresa" type="text" />
                        <label htmlfor="empresa">Empresa creadora</label>
                    </div>
                    <div className="input-field col s6">
                        <button 
                            type="submit" 
                            name="action" 
                            className="waves-effect pink lighten-3 btn">
                                Registrar juego
                        </button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default PersonasForm