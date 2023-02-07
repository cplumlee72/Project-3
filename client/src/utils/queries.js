import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
query getBooks {
  books {
    _id
    name
    description
    price
    image
    genre {
      _id
      name
    
    }
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($books: [ID]!) {
    checkout(books: $books) {
      session
    }
  }
`;

export const QUERY_ALL_BOOKS = gql`
  {
    books {
      _id
      name
      description
      price
      quantity
      genre {
        _id
        name
      }
    }
  }
`;

export const QUERY_GENRES = gql`
  {
    genres {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        books {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
