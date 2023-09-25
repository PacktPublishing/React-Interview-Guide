import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { menu } from '../../../data/menu';
import { profile } from '../../../data/profile';
import allowCors from '../utils/cors';

// Define the GraphQL schema and resolvers
const typeDefs = gql`
  type Menu {
    id: String
    foodType: String
    name: String
    description: String
  }

  type Profile {
    id: String
    bio: String
  }

  type Query {
    menu: [Menu]
    profile: [Profile]
  }
`;

const resolvers = {
  Query: {
    menu: () => menu,
    profile: () => profile,
  },
};

// Create the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});

export async function GET(request) {
  return handler(request);
}

export async function POST(request) {
  return handler(request);
}

export default allowCors(handler);
