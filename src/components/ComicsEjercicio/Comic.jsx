import React from "react";
//··················HIJO···························
export default class Comic extends React.Component {
 render () {
    return(
        <div>
            {/* Corregido: se añadieron llaves alrededor de la variable */}
            <h1 style={{color: "blue"}}>{this.props.comic.titulo}</h1>
            
            <p>{this.props.comic.descripcion}</p>
            
            <button onClick={() => {
                this.props.selecionarComic(this.props.comic)
            }}>
                seleccionar Comic Favorito
            </button>

            {/* Corregido: se añadió la llave { de apertura después del = */}
            <button onClick={() => {
                let index = parseInt(this.props.indice);
                this.props.deleteComic(index);
            }}>
                Delete 
            </button>
            
            <img src={this.props.comic.imagen} style={{width : "60px", height : "80px"}} alt="comic" />
        </div>
    )
 }
}