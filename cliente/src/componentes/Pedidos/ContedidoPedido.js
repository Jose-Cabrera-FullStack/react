import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Animated from 'react-select/animated'
import Resumen from './Resumen';
import GenerarPedido from './GenerarPedido';

import Error from '../Alertas/Error';

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

    actualizarTotal =()=>{
        // leer el state de productos
        const productos= this.state.productos;

        //cuando todos los productos estan en 0
        if(productos.length === 0){
            this.setState({
                total:0
            });
            return;
        }

        let nuevoTotal = 0;
         
        //realizar la operacion de cantidad x precio
    
        productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio));
        this.setState({
            total: nuevoTotal
        })
    }

    actualizarCantidad = (cantidad, index) =>{
        // leer el state de productos
        const productos= this.state.productos;

        //agregar la cantidad desde ela interfaz 
        productos[index].cantidad = Number(cantidad);

        //agregamos el state
        this.setState({
            productos
        },()=> {
            this.actualizarTotal();
        })
    }
    eliminarProducto = (id) =>{
        
        const productos = this.state.productos;

        const productosRestantes = productos.filter(producto=>producto.id !== id);

        this.setState({
            productos: productosRestantes
        },()=> {
            this.actualizarTotal();
        })


    }

    render(){

        const mensaje = (this.state.total <0) ? <Error error ="Las cantidades no pueden ser negativas"/>: '';
        return(
            <Fragment>
                <h2 className="text-center mb-5">Selecionar Articulo</h2>
                {mensaje}
            <Select 
                onChange={this.seleccionarProducto}
                options={this.props.productos}
                isMulti={true}
                components={Animated()}
                placeholder={'Seleccionar Productos'}
                getOptionValue={(options)=>options.id}
                getOptionLabel={(options)=>options.nombre}
                value={this.state.productos}
                />
                <Resumen
                    productos={this.state.productos}  
                    actualizarCantidad={this.actualizarCantidad}
                    eliminarProducto={this.eliminarProducto}
                />
                <p className="font-weight-bold float-right mt-3">
                    Total:
                    <span className="font-weight-normal">
                        $ {this.state.total}
                    </span>
                </p>
                <GenerarPedido productos={this.state.productos} total={this.state.total} idCliente={this.props.id}/>
            </Fragment>
        );
    }
}

export default ContenidoPedido; 