import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RootSession} from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
    uri : "http://localhost:4000/graphql",
  //enviar token al servidor
    fetchOptions: {
      credentials: 'include'
    },
    request: operation => {
      const token = localStorage.getItem('token')
      operation.setContext({
        headers: {
          authorization: token
        }
      })
    },
  
    cache: new InMemoryCache({
      addTypename:false
    }),
    onError: ({networkError, graphQLError}) => {
      console.log('graphQLerrors', graphQLError);
      console.log('networkError', networkError);
    }
  });
  

ReactDOM.render(
    <ApolloProvider client={client}>      
        <RootSession/>
    </ApolloProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
