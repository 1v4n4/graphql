import {ApolloServer, gql} from 'apollo-server';
import bodyParser from 'body-parser';
import { buildSchema } from 'graphql';

const typeDefs = gql`
  type Query {
    hello: [String!]!
  }`;

const resolvers = {
  Query: {
    hello: () => ['Hello','world!']
  }
};
const server = new ApolloServer(
  {
    typeDefs,
    resolvers,
  }
);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}
);