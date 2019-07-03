import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Animated from 'react-select/animated'
import Resumen from './Resumen';

class ContenidoPedido extends Component{
    state={
        productos:[],
        total:0
    }

    seleccionarProducto = (productos)=>{
        this.setState({
            productos
        })
        //console.log(`Algo pasó con`,productos)
    }

    actualizarCantidad = (cantidad, index) =>{
        //console.log(cantidad)
        let nuevoTotal = 0;

        // leer el state de productos
        const productos= this.state.productos;

        //cuando todos los productos estan en 0
        if(productos.length === 0){
            this.setState({
                total:nuevoTotal
            });
            return;
        }
        //agregar la cantidad desde ela interfaz 
        productos[index].cantidad = Number(cantidad);
        
        //realizar la operacion de cantidad x precio
        productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio));

        //validamos
  
        //agregamos el state
        this.setState({
            productos,
            total: nuevoTotal
        })
    }

    render(){
        return(
            <Fragment>
                <h2 className="text-center mb-5">Selecionar Articulo</h2>
            <Select 
                onChange={this.seleccionarProducto}
                options={this.props.productos}
                isMulti={true}
                components={Animated()}
                placeholder={'Seleccionar Productos'}
                getOptionValue={(options)=>options.id}
                getOptionLabel={(options)=>options.nombre}
                />
                <Resumen
                    productos={this.state.productos}  
                    actualizarCantidad={this.actualizarCantidad}
                />
                <p className="font-weight-bold float-right mt-3">
                    Total:
                    <span className="font-weight-normal">
                        $ {this.state.total}
                    </span>
                </p>
            </Fragment>
        );
    }
}

export default ContenidoPedido; 