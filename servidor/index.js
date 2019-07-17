import express from 'express';

//graphql
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from './data/schema';
import {resolvers} from './data/resolvers';

//generar Token
import dotenv from 'dotenv';
dotenv.config({path:'variables.env'});

import jwt from 'jsonwebtoken';

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async({req}) => {
        //obtener el token del servidor
        const token = req.headers['authorization'];

        if(token !== "null"){
            try{
                const usuarioActual = await jwt.verify(token, process.env.SECRETO);

                req.usuarioActual = usuarioActual;

                return{
                    usuarioActual
                }

            }catch(err) {
                console.log(err);
            }
        }

    }
});


server.applyMiddleware({app});

app.listen({port:4000},()=>console.log(`El servidor esta corriendo http://localhost:4000${server.graphqlPath}`));