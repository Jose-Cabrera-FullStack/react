import React,{Component, Fragment} from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//importar componentes

import Header from './componentes/Layout/Header';
import Clientes from './componentes/Clientes/Clientes';
import EditarCliente from './componentes/Clientes/EditarCliente';
import NuevoCliente from './componentes/Clientes/NuevoCliente';

import NuevoProducto from './componentes/Productos/NuevoProducto';

const client = new ApolloClient({
  uri : "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename:false
  }),
  onError: ({networkError, graphQLError}) => {
    console.log('graphQLerrors', graphQLError);
    console.log('networkError', networkError);
  }
});

class App extends Component {
  render(){
    return(
      <ApolloProvider client={client}>
        <Router> 
          <Fragment>
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clientes}/>
                <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
                <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
                <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                <Clientes/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
