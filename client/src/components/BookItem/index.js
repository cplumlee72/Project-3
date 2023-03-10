import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function BookItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    console.log(itemInCart);
    console.log(cart);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        book: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card px-1 py-2">
      <Link to={`/books/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p className="itemName">{name}</p>
      </Link>
      <div>
        <div className="itemStock">
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span className="itemPrice">${price}</span>
      </div>
      <button className="addCartBtn"onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default BookItem;
