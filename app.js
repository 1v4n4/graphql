import {ApolloServer, gql} from 'apollo-server';
import bodyParser from 'body-parser';
import { buildSchema } from 'graphql';

// const resolvers = {
//   Query: {
//     name: () => 'My first product',
//     description: () => 'This is my first product',
//     quantity: () => 10,
//     price: () => 10.99,
//     onSale: () => true
//   }
// };

const typeDefs = gql`
  type Query {
    hello: [String!]!
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }`;

const resolvers = {
  Query: {
    hello: () => ['Hello', 'world!'],
    products: () => [{
      name: "product",
      description: "product description",
      quantity: 1,
      price: 9.99,
      onSale: true
    }]
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