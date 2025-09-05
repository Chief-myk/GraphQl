import express from "express"
import dotenv from "dotenv"
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { graphql } from "graphql";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(express.json());

// GraphQL schema
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    hello: String
    greet(name: String): String    
  }
`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        books: () => books,
        hello: () => 'Hello, world!',
        greet: (_: any, { name }: { name: String }) => `Hello, ${name}!`,
    },
};

async function startServer() {
    // // Set up Express routes first
    // app.get('/', (req, res) => {
    //     res.send('Hello World!');
    // });

    // // Start Express server
    // app.listen(port, () => {
    //     console.log(`🌐 Express server running at: http://localhost:${port}/`);
    // });

    // Start Apollo GraphQL server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: port, path: '/graphql' },
        context: async () => ({})
    });

    console.log(`🚀 GraphQL server ready at: ${url}`);
}

startServer().catch(error => {
    console.error('Error starting server:', error);
});