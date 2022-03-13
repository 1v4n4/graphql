import {ApolloServer, gql} from 'apollo-server';
import bodyParser from 'body-parser';
import { buildSchema } from 'graphql';
import { products } from './data.js';



const typeDefs = gql`
  type Query {
    hello: [String!]!
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
  }`;

const resolvers = {
  Query: {
    hello: () => ['Hello', 'world!'],
    products: () => products
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