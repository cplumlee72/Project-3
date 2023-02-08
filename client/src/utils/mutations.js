import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser(
  $userName: String!
  $email: String!
  $password: String!
  ) {
  addUser(
    userName: $userName
    email: $email
    password: $password
    ) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_MEMBER = gql`
  mutation addMember(
    $userName: String!
  ) {
    addMember(
      userName: $firstName
    )
  }
`;

export const UPDATE_POST = gql`
mutation updatePost(
  $id: ID!, $likes: Int!, $dislikes:Int!
  ) {
  updatePost(
    _id: $id, likes: $likes, dislikes: $dislikes
    ) {
    likes
    dislikes
  }
}`