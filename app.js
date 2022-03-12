import express from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express(); // create an instance of express

app.use(bodyParser.json()); // use bodyParser to parse json

app.use("/graphql", graphqlHTTP({
  schema: buildSchema(`
  type rootQuery {
    events: [String!]!
  }
  type rootMutation {
    createEvent(name: String): String
  }
  schema {
    query: rootQuery
    mutation: rootMutation
    }
    `),
  rootValue: {
    events: () => {
      return ['event1', 'event2'];
    },
    createEvent: args => {
      const eventName = args.name;
      return eventName;
    }
  },
  graphiql: true
}));

app.listen(3000);