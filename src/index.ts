import express from "express"
import dotenv from "dotenv"
import { startStandaloneServer } from '@apollo/server/standalone';

import { server } from "./graphql/index.js";


dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(express.json());


// Start Apollo GraphQL server
async function startServer() {

    const { url } = await startStandaloneServer(server, {
        listen: { port: port, path: '/graphql' },
        context: async () => ({})
    });

    console.log(`🚀 GraphQL server ready at: ${url}`);
}

startServer().catch(error => {
    console.error('Error starting server:', error);
});