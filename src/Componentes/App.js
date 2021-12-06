import React from 'react';
import axios from 'axios';
import './App.css';
import PersonasLista from './Personas/PersonasLista';
import PersonasDetalle from './Personas/PersonasDetalle';
import PersonasForm from './Personas/PersonasForm';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      personas: [ ],
      personaActual: {}
    }
    this.actualizarPersonaActual = this.actualizarPersonaActual.bind(this)
  }

  componentDidMount(){
    const url = 'http://localhost:5000/personas'
    axios.get(url)
    .then((respuesta)=>{
      //actualizar estado personas:
      this.setState({
        personas: respuesta.data
      })
    })
    .catch((error)=>console.log(error))
  }

//Asignar el estado a la persona actual
actualizarPersonaActual(persona){
  this.setState({
    personaActual: persona
  })
}




render(){
  return (
    <div className="container-fluid">
         <div className="row">
            <div className="col s12">
              <nav>
                <div className="nav-wrapper  pink darken-4">
                  <a href="?" class="brand-logo">START</a>
                </div>
              </nav>
            </div>
        </div>
          <div className="row">
          <div className="col s3">
              <PersonasLista lista={ this.state.personas }
                             actualizarPersona={ this.actualizarPersonaActual }/>
        </div>
          <div className="col s9">
              <PersonasDetalle  persona={ this.state.personaActual }/>
        </div>
          <div className="row">
            <div className="col s12">
                <PersonasForm />
            </div>
          </div>
        </div>
    </div>
  );
}
}
  

export default App;
