import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";


function ClubItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    description,
    locked,
    book,
  } = item;

  const {  } = state


   if (!locked) return (
    <div className="card px-1 py-1">
      <Link to={`/clubs/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{description} </div>
        {/* <span>{book.name}</span> */}
      </div>
    </div>
  );
}

export default ClubItem;
