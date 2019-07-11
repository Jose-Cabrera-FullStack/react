import React,{Fragment} from 'react';

import {Query} from 'react-apollo';
import {OBTENER_PEDIDOS} from '../../queries';
import Pedido from './Pedido';

import '../../spinner.css';

const PedidosClientes = (props) => {

    const cliente = props.match.params.id;

    return (
        <Fragment>
            <h1 className="text-center mb-5">Pedidos del Cliente</h1>
            <div className="row">
                <Query query={OBTENER_PEDIDOS} variables={{cliente}} pollInterval={500}>
                    {({loading,error,data, startPolling, stopPolling})=>{
                        if (loading) return (
                            <div class="sk-folding-cube">
                                <div class="sk-cube1 sk-cube"></div>
                                <div class="sk-cube2 sk-cube"></div>
                                <div class="sk-cube4 sk-cube"></div>
                                <div class="sk-cube3 sk-cube"></div>
                            </div>
                            )
                        if(error) return `Error ${error.message}`

                        console.log(data);

                        return (
                            data.obtenerPedidos.map(pedido=>(
                                <Pedido
                                    key={pedido.id}
                                    pedido={pedido}
                                    cliente={cliente}
                                />
                            ))
                        )
                    }}
                </Query>
            </div>
        </Fragment>
    );
}

export default PedidosClientes;