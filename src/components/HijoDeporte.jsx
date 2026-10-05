import React from 'react';
export default class HijoDeporte extends React.Component {
    state = {
        favorito: ""
    }
    seleccionarFavortito = () => {
        this.setState({
            favorito: "Su deporte favorito es: " + this.props.deporte
        })
    }
    render (){
        return (
             <div>
                <h1>Hijo Deporte</h1>
                <p>{this.props.deporte}</p>
                <button onClick={() => this.props.mostrarFavorito(this.props.deporte)}>Avisar cual es mi favorito</button>
            </div> 
        
        )
    }
}