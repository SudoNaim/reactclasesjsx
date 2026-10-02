const { Component } = require("react");


class Contador extends Component {

    numero = 1;
    incrementarNumero = () => {
        //Para acceder a cualquier variable de la clase, se debe usar this. y el nombre de la variable.
        this.numero += 1;
        console.log("Número:"+this.numero);
    }

    //La sitaxis de la llamada a métodos ha cambiado en render
    //Se puede llamar directamente al método onClick (sin lamda y siin parentesís).
    render () {
        return (
            <div>
                <h1>Contador JSX</h1>
                <p>Número: {this.numero}</p>
                <button onClick={this.incrementarNumero}>Incrementar</button>
            </div>
        )
    }

}

export default Contador;