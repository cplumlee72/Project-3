import { useReducer } from "react";
import {
  UPDATE_BOOKS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_GENRES,
  CLEAR_CART,
  TOGGLE_CART,
  UPDATE_CURRENT_GENRE,
  UPDATE_CLUBS
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.book],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.books],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(book => {
          if (action._id === book._id) {
            book.purchaseQuantity = action.purchaseQuantity
          }
          return book
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(book => {
        return book._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_GENRES:
      return {
        ...state,
        genres: [...action.genres],
      };

    case UPDATE_CURRENT_GENRE:
      return {
        ...state,
        currentGenre: action.currentGenre
      };

      case UPDATE_CLUBS:
        return {
          ...state,
          clubs: action.clubs
        };
    default:
      return state;
  }
};

export function useBookReducer(initialState) {
  return useReducer(reducer, initialState)
}
