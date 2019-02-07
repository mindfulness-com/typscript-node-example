import { GraphQLServer } from "graphql-yoga";

const PORT = process.env.port || 3000;

const typeDefs = `
  type Query {
    company(id: Int): Company
    companies: [Company]
  }

  type Company {
    id: Int
    name: String
  }
`;

const companies = {
  1: {
    id: 1,
    name: "Super BV"
  },
  2: {
    id: 2,
    name: "Uber BV"
  },
  3: {
    id: 3,
    name: "Terra BV"
  }
};

const resolvers = {
  Query: {
    company: (_, { id }) => companies[id],
    companies: () => Object.keys(companies).map(key => companies[key])
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start({ port: PORT }, () =>
  console.log(`Server is running on localhost:${PORT}`)
);
export default server;
