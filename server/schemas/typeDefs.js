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
    quantity: Int
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
    admin: User
    locked: Boolean
    posts: [Post]
    book: Book
  }

  type Post {
    _id: ID
    text: String!
    user: String!
  }

  input PostInput {
    text: String!
    user: String!
  }

  type Comment {
    _id: ID
    text: String
    user: User
    likes: Int
    dislikes: Int

  }

  type Order {
    _id: ID
    purchaseDate: String
    books: [Book]
  }

  type User {
    _id: ID
    password: String
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
    posts: [Post]
    genres: [Genre]
    clubs: [Club]
    club(_id: ID!): Club
    books(genre: String, name: String): [Book]
    book(_id: ID!): Book
    user: User
    order(_id: ID!): Order
    checkout(books: [ID]!): Checkout
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addOrder(books: [ID]!): Order
    updateUser(userName: String, email: String, password: String): User
    updateBook(_id: ID!, quantity: Int!): Book
    login(email: String!, password: String!): Auth
    addPost( text: String!, user: String! ): Post
  }
`;

module.exports = typeDefs;


// addClub(name: String!, description: String!, image: String!, admin: String!, book: String!): Club