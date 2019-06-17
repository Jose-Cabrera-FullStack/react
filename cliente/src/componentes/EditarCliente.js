import React, { Component, Fragment } from 'react';
import {CLIENTES_QUERY} from '../queries';
import {Query} from 'react-apollo';

class EditarCliente extends Component {
    state = {}
    render() {

        const {id} = this.props.match.params; 

        console.log(id);
        return (
            <Fragment>

            <h2 className="text-center" >Editar Cliente</h2>

                <Query query={CLIENTES_QUERY} variables={{id}}>
                
                {({loading,error,data})=>{
                    if(loading) return 'Cargando...';
                    if(error) return `Error! ${error.message}`;

                    console.log(data);
                }}
                </Query>
            </Fragment>
        );
    }
}

export default EditarCliente;