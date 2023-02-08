import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_GENRES, UPDATE_CURRENT_GENRE } from "../../utils/actions";
import { QUERY_GENRES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function GenreMenu() {
  const [state, dispatch] = useStoreContext();

  const { genres, currentGenre } = state;

  const { loading, data } = useQuery(QUERY_GENRES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_GENRES,
        genres: data.genres,
      });
      data.genres.forEach((genre) => {
        idbPromise("genres", "put", genre);
      });
    } else if (!loading) {
      idbPromise("genres", "get").then((genres) => {
        dispatch({
          type: UPDATE_GENRES,
          genres: genres,
        });
      });
    }
  }, [loading]);

  const handleClick = (_id) => {
    dispatch({
      type: UPDATE_CURRENT_GENRE,
      currentGenre: _id,
    });
  };

  return (
    <div className="bkGenre">
      <h2 className="py-2">Choose a Genre:</h2>
      {state.genres.map((item) => (
        <button className="genreButton"
          key={item.name}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default GenreMenu;
