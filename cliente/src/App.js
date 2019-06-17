import React,{Component, Fragment} from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//importar componentes

import Header from './componentes/Header';
import Clientes from './componentes/Clientes';
import EditarCliente from './componentes/EditarCliente';
import NuevoCliente from './componentes/NuevoCliente';

const client = new ApolloClient({
  uri : "http://localhost:4000/graphql",
  onError: ({networkError, graphQLError}) => {
    console.log('graphQLerrors', graphQLError);
    console.log('networkError', networkError);
  }
});
//"12.6" Siempre se enumera en App.js
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
