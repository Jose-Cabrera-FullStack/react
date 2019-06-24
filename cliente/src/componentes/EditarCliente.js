import React, { Component, Fragment } from 'react';
import {CLIENTE_QUERY} from '../queries';
import {Query} from 'react-apollo';

import FormularioEditarCliente from './FormularioEditarCliente';

class EditarCliente extends Component {
    state = {}
    render() {

        const {id} = this.props.match.params; 

        //console.log(id);
        return (
            <Fragment>

            <h2 className="text-center" >Editar Cliente</h2>
                <div className="row justify-content-center">
                    <Query query={CLIENTE_QUERY} variables={{id}}>
                    
                    {({loading,error,data})=>{
                        if(loading) return 'Cargando...';
                        if(error) return `Error! ${error.message}`;
                        
                        console.log(data);
                        return (
                            <FormularioEditarCliente
                                cliente={data.getCliente}
                                id 
                            />
                        )
                    }}
                    </Query> 
                </div>

            </Fragment>
        );
    }
}

export default EditarCliente;