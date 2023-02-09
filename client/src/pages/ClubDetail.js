import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PostBox from '../components/PostBox';
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_BOOKS,
  UPDATE_CLUBS,
} from '../utils/actions';
import { QUERY_CLUBS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function ClubDetail() {
  const [state, dispatch] = useStoreContext();
  

  const [currentClub, setCurrentClub] = useState();
  const [currentBook, setCurrentBook] = useState();

  const { loading, data } = useQuery(QUERY_CLUBS);

  const { clubs, cart, books } = state;
  
  const  bookid  = data.clubs[0].book._id
  const  clubid = data.clubs[0]._id
  useEffect(() => {
    console.log(books)
    console.log(bookid)
    setCurrentClub(clubs.find((club) => club._id === clubid));
    setCurrentBook(books.find((book) => book._id === bookid));
    // already in global store
    if (clubs.length) {

    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_CLUBS,
        clubs: data.clubs,
      });

      data.clubs.forEach((club) => {
        idbPromise('clubs', 'put', club);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('clubs', 'get').then((indexedClubs) => {
        dispatch({
          type: UPDATE_CLUBS,
          clubs: indexedClubs,
        });
      });
    }
  }, []);

  const addToCart = () => {
    const  id  = currentBook._id;
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        book: { ...currentBook, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentBook, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentBook._id,
    });

    idbPromise('cart', 'delete', { ...currentBook });
  };
  console.log(currentClub);
  return (
    <>
      {currentClub && cart ? (
        
        <div className="container my-1">
          <Link to="/">← Back to Books</Link>

          <h2>{currentClub.name + ` - `}</h2>

          <p>{currentClub.description}</p>

          <p>
            {/* <strong>Price:</strong>${currentClub.book.price}{' '} */}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentBook._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentClub.image}`}
            alt={currentClub.name}
          />
          <div>
          {currentClub.posts.map((post) => (
            <PostBox
              key={post._id}
              _id={post._id}
              text={post.text}
              user={post.user}
              // likes={post.likes}
              // dislikes={post.dislikes}              
            />
          ))}
          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default ClubDetail;