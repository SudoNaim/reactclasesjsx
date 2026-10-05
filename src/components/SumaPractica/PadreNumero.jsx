import React from "react";
import HijosNumeros from "./HijoNumero.jsx"
export default class PadreNumero extends React.Component {

    numerosHijos = [
        Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1
    ];

    state = {
        sumaTotal: "0"
    }

    actualizarSuma = (nuevoNumero) => {
        this.setState({
            sumaTotal: parseInt(this.state.sumaTotal) + parseInt(nuevoNumero)
        })
    }



    render() {
        return (
            <div>
                <h1>Padre Numero</h1>
                <a>Debajo se ira mostrando la suma total de los numeros, que se van añadiendo desde el componente hijo.</a>
                <h3>La suma total es: {this.state.sumaTotal}</h3>

                {
                    this.numerosHijos.map((numero, index) => {
                        return <HijosNumeros key={index} numero={numero} actualizarSuma={this.actualizarSuma} />
                    })
                }   
            </div>
        )
    }
}