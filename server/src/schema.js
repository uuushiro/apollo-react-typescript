"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql } = require("apollo-server");
exports.typeDefs = gql `
  type Query {
    hello: String!
    users: [User]!
  }

  type Mutation {
    createUser(name: String): [User]!
  }

  type User {
    id: ID!
    name: String!
    createdAt: String
    updatedAt: String
  }
`;
