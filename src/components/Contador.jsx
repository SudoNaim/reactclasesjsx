const { Component } = require("react");


class Contador extends Component {

    numero = 1;
    incrementarNumero = () => {
        //Para acceder a cualquier variable de la clase, se debe usar this. y el nombre de la variable.
        this.numero += 1;
        console.log("Número:"+this.numero);
    }

    state = {
        valor: parseInt(this.props.inicio)
    }

    incementarValor = () => {
        this.setState({
            valor: this.state.valor + 1
        })
    }

    //La sitaxis de la llamada a métodos ha cambiado en render
    //Se puede llamar directamente al método onClick (sin lamda y siin parentesís).
    render () {
        return (
            <div>
                <h1>Contador JSX</h1>
                <p>Número: {this.numero}</p>
                <button onClick={this.incrementarNumero}>Incrementar</button>
                <h3>Valor: {this.state.valor}</h3>
                <button onClick={this.incementarValor}>Incrementar Valor</button>
            </div>
        )
    }

}

export default Contador;