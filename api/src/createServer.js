import { GraphQLServer } from 'graphql-yoga';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';

const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    }
  });
};

export default createServer;
