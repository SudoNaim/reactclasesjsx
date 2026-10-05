import React from 'react';
export default class HijosNumeros extends React.Component {
    render() {
        return (
            <div>
                <h2>Hijo Numero {this.props.numero}</h2>
                <button onClick={() => this.props.actualizarSuma(this.props.numero)}>Añadir numero a la suma</button>
            </div>
        )
    }
}