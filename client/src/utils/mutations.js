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

export const ADD_CLUB = gql`
mutation addClub(
  $name: String!
  $description: String!
  $image: String!
  $admin: User
  $book: Book!
  ) {
  addClub(
    name: $name
    description: $description
    image: $image
    admins: $admins
    book: $book
    ) {
    book
    club {
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

export const ADD_POST = gql`
mutation addPost( 
  $text: String!
  $user: String!
) {
  addPost( 
    text: $text
    user: $user
    ) {
    text
    user
  }
}`