import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';

const createServer = () => {
  const db = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '',
    database: 'skeleton-dev',
    entities: [__dirname + '/entity/*.js'],
    synchronize: true
  });

  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    context: { db }
  });
};

export default createServer;
