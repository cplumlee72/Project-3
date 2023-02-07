import React, { createContext, useContext } from "react";
import { useBookReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useBookReducer({
    cart: [],
    cartOpen: false,
    currentGenre:'',
    books: [],
    users: [],
    genres: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
