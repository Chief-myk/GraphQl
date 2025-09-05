// src/graphql/index.ts

import { ApolloServer } from '@apollo/server';
import { userModule } from "./users/index.js";


// GraphQL schema
const typeDefs = `#graphql
  type Query {
 ${userModule.queries}
  }

  type Mutation {
   ${userModule.mutations}
  }
`;

const resolvers = {
  Query: {
    ...userModule.resolver.queries

  },
  Mutation: {
    ...userModule.resolver.mutations
  }
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});