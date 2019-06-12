import React,{Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

//importar componentes

import Header from './componentes/Header';
import Clientes from './componentes/Clientes';

const client = new ApolloClient({
  uri : "http://localhost:4000/graphql",
  onError: ({networkError, graphQLError}) => {
    console.log('graphQLerrors', graphQLError);
    console.log('networkError', networkError);
  }
});
//11.5
class App extends Component {
  render(){
    return(
      <ApolloProvider client={client}>
        <Header/>
        <div className="container">
          <Clientes/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
