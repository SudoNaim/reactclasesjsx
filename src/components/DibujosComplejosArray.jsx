import React, { Component } from 'react';
class DibujosComplejosArray extends Component {

    dibujarNumeros = () => {
        let listaNumeros = [];
        for (let i = 1; i <=7;  i++) {
            var num = parseInt(Math.random() * 120)+1;
            //Añadimeos cada numero a la lista con HTML
            listaNumeros.push(<li key={i}>{num}</li>);
        }
    
        return listaNumeros;
    }

    render() {
        return (
            <div>
                <h1>Dibujos Complejos Array</h1>
                <p>Este componente muestra un array de dibujos complejos.</p>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        )
    }
}
export default DibujosComplejosArray;