import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_GENRES,
  UPDATE_CURRENT_GENRE,
} from '../../utils/actions';
import { QUERY_GENRES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function GenreMenu() {
  const [state, dispatch] = useStoreContext();

  const { genres } = state;

  const { loading, data: genreData } = useQuery(QUERY_GENRES);

  useEffect(() => {
    if (genreData) {
      dispatch({
        type: UPDATE_GENRES,
        genres: genreData.genres,
      });
      genreData.genres.forEach((genre) => {
        idbPromise('genres', 'put', genre);
      });
    } else if (!loading) {
      idbPromise('genres', 'get').then((genres) => {
        dispatch({
          type: UPDATE_GENRES,
          genres: genres,
        });
      });
    }
  }, [genreData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_GENRE,
      currentGenre: id,
    });
  };

  return (
    <div>
      <h2>Choose a Genre:</h2>
      {genres.map((item) => (
        <button
          key={item._id}
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
