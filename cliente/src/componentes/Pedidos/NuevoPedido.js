import React, { Component, Fragment } from 'react';
import DatosCliente from './DatosClientes';
import { Query } from 'react-apollo';
import { OBTENER_PRODUCTOS } from '../../queries';

import ContenidoPedido from './ContedidoPedido';

import {withRouter} from 'react-router-dom';

import '../../spinner.css';

class NuevoPedido extends Component {
    starte={

    }
    render(){
        const {id} = this.props.match.params;
        
        //console.log(this.props.session);
        //obtener el ID del vendedor actual
        const idVendedor = this.props.session.obtenerUsuario.id;
        
        return (
        <Fragment>
            <h1 className="text-center mb-5">Nuevo Pedido</h1>

            <div className="row">
                <div className="col-md-3">
                    <DatosCliente id={id}/>
                </div>
                <div className="col-md-9">
                    <Query query={OBTENER_PRODUCTOS} variables={{stock:true}}>
                        {({loading,error,data})=>{
                            if (loading) return (
                            <div class="sk-folding-cube">
                                <div class="sk-cube1 sk-cube"></div>
                                <div class="sk-cube2 sk-cube"></div>
                                <div class="sk-cube4 sk-cube"></div>
                                <div class="sk-cube3 sk-cube"></div>
                            </div>
                            )
                            if(error) return `Error ${error.message}`

                            //console.log(data);
                            return(
                                <ContenidoPedido
                                    productos={data.obtenerProductos}
                                    id={id}
                                    idVendedor={idVendedor}
                                />
                            )
                        }}
                    </Query>
                </div>
            </div>
        </Fragment>
        );
    }
}
export default withRouter( NuevoPedido);