import HijosDeporte from "./HijoDeporte.jsx"
import React from 'react';
export default class PadreDeporte extends React.Component {
    deportes = ["Futbol", "Baloncesto", "Tenis", "Natacion", "Ciclismo"];

    state = {
        deporteFavorito: ""
    }

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            deporteFavorito: "Su deporte favorito es: " + deporteSeleccionado
        })
    }
    render (){
        return (
             <div>
                <h1>Padre Deporte</h1>
                <h3>{this.state.deporteFavorito}</h3>
                {
                    this.deportes.map((deporte, index) => {
                        return <HijosDeporte key={index} deporte={deporte} mostrarFavorito={this.mostrarFavorito} />
                    })
                }
            </div> 
        )
    }
}