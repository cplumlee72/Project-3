import React, { useEffect } from 'react';
import BookItem from '../BookItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_BOOKS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_BOOKS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function BookList() {
  const [state, dispatch] = useStoreContext();

  const { currentGenre } = state;

  const { loading, data } = useQuery(QUERY_BOOKS);

  useEffect(() => {
  
    if (data) {
      dispatch({
        type: UPDATE_BOOKS,
        books: data.books,
      });
      data.books.forEach((book) => {
        idbPromise('books', 'put', book);
      });
    } else if (!loading) {
      idbPromise('books', 'get').then((books) => {
        dispatch({
          type: UPDATE_BOOKS,
          books: books,
        });
      });
    }
  }, [loading]);
  
  function filterBooks() {
    console.log(currentGenre)
    if (!currentGenre) {
      return state.books;
    }

    return state.books.filter(
      (book) => book.genre._id === currentGenre
    );
  }

  
  return (
    <div className="my-2">
      <h2>Our Books:</h2>
      { state.books.length ? (
        <div className="flex-row">
          {filterBooks().map((book) => (
            <BookItem
              key={book._id}
              _id={book._id}
              image={book.image}
              name={book.name}
              price={book.price}
              quantity={book.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any books yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default BookList;
