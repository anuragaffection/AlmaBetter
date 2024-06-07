const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const bodyParser = require('body-parser')
const cors = require('cors')

async function startServer() {
    const app = express();

    // !, represent must to have 
    const server = new ApolloServer({
        typeDefs: `
            type User {
                id : ID!
                name : String!
                username : String!
                email : String!
            }

            type Todo {
                id : ID!
                title : String!
                completed : Boolean
                userId : ID!
                user : User
            }
            
            type Query {
                getTodos : [Todo]
                getAllUsers : [User]
                getUser(id : ID!) : User
            }
        `,
        // on resolvers, we write logic 
        resolvers: {
            Todo : {
                user : () => {
                    
                }
            },
            Query : {
                getTodos : () => {

                },
                getAllUsers : () => {

                },
                getUser : (parent, {id})  => {

                }
            }
        }
    })

    app.use(bodyParser.json())
    app.use(cors())

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, () => { console.log("Server is running on port 8000") })
}

startServer();