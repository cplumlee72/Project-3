const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Genre {
    _id: ID
    name: String
  }

  type Book {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    genre: Genre
  }

  type Club {
    _id: ID
    name: String
    description: String
    image: String
    users: [User]
    admin: [User]
    private: Boolean
  }

  type Order {
    _id: ID
    purchaseDate: String
    books: [Book]
  }

  type User {
    _id: ID
    userName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    genres: [Genre]
    clubs: [Club]
    books(Genre: ID, name: String): [Book]
    book(_id: ID!): Book
    user: User
    order(_id: ID!): Order
    checkout(books: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(books: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateBook(_id: ID!, quantity: Int!): Book
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
