import React from 'react';
class DibujosComplejosRender extends React.Component {
    //Necesitamos un array en State para ir generando nuevos elementos el pulsar el botón
    state = {
        //ARRAY
        nombres : [
            "Juan",
            "Pedro",
            "María",
            "Ana",
            "Luis"
        ]};

        generarNombre = () => {
            //Podemos utilizar directamente (array) push,
            //si es un objeto simple (strg,int,...) no podemos asignar
            this.state.nombres.push("Nuevo Nombre");
            this.setState({ nombres: this.state.nombres });
        }
    
    render() {
        return (
            <div>
                <h1>Dibujos Complejos Render</h1>
                <button onClick={this.generarNombre}>Generar Nombre</button>
                {
                    // Cerramos correctamente el map
                    this.state.nombres.map((nombre, index) => {
                        return (
                            <h4 style={{color: "blue"}} key={index}>
                                {nombre}
                            </h4>
                        );
                    })
                }
            </div>
        );
    }
}
export default DibujosComplejosRender;