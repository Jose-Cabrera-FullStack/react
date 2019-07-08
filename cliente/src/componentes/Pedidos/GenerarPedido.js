import React, { Component } from 'react';

import {Mutation} from 'react-apollo';
import {NUEVO_PEDIDO} from '../../mutations';

import {withRouter} from 'react-router-dom';

const validadPedido = (props)=>{
    let noValido = !props.productos || props.total <= 0;

    return noValido;
}

const GenerarPedido =(props) => {

    //console.log(props);
    return (
        <Mutation mutation={NUEVO_PEDIDO} onCompleted={()=>props.history.push('/clientes')}>
            {nuevoPedido =>(
                <button 
                    onClick={e =>{
                    const productosInput= props.productos.map(({nombre,precio,stock,...objeto})=>objeto);

                    const input = {
                        pedido: productosInput,
                        total: props.total,
                        cliente: props.idCliente
                    }
                    //console.log(input);
                    nuevoPedido({
                        variables: {input}
                    })

                }} type="button" className="btn btn-warning mt-4"disabled={validadPedido(props)}>
                    Generar Pedido
                </button> 
            )}
        </Mutation>
        
    );
}

export default withRouter(GenerarPedido);