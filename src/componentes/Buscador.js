import React, {Component} from 'react';

class Buscador extends Component{
    //Este ref nos va a servir para tomar los datos ingresados en el input
    busquedaRef = React.createRef();
    obtenerDatos = (e) =>{
        e.preventDefault();
        //Esta es la forma para leer el ref.
        //console.log(this.busquedaRef.current.value);


        //Tomamos el valor del input
        const termino = this.busquedaRef.current.value;

        //Lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }

}
export default Buscador;