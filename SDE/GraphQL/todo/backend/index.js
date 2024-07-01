const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const bodyParser = require('body-parser')
const cors = require('cors')

const { todos } = require("./data/todos")
const { users } = require("./data/users")

// Query 
// Mutations 

// why we need ApolloServer
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
                phone : String!
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
            // what we are doing here 
            Todo: {
                // how 
                user: (todo) => {
                    return users.find((e) => e.id === todo.id)
                }
            },
            Query: {
                getTodos: () => {
                    return todos;
                },
                getAllUsers: () => {
                    return users;
                },
                // how 
                // why we need parent 
                getUser: (parent, { id }) => {
                    return users.find((e) => e.id === id);
                }
            }
        }
    })

    app.use(bodyParser.json())
    app.use(cors())

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, () => { console.log("Server is running on port 8000 + http://localhost:8000") })
}

startServer();