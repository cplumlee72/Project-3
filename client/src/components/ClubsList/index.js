import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CLUBS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_CLUBS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import ClubItem from '../ClubItem';

function ClubsList() {
  const [state, dispatch] = useStoreContext();

  const { clubs } = state;

  const { loading, data } = useQuery(QUERY_CLUBS);

  useEffect(() => {

    if (data) {
      dispatch({
        type: UPDATE_CLUBS,
        clubs: data.clubs,
      });
      data.clubs.forEach((club) => {
        idbPromise('clubs', 'put', club);
      });
    } else if (!loading) {
      idbPromise('clubs', 'get').then((clubs) => {
        dispatch({
          type: UPDATE_CLUBS,
          clubs: clubs,
        });
      });
    }
  }, [loading]);
  
  console.log(data);
  
  return (
    <div className="my-2">
      <h2>Clubs:</h2>
      { state.clubs.length ? (
        <div className="flex-row">
          {state.clubs.map((club) => (
            <ClubItem
              key={club._id}
              _id={club._id}
              image={club.image}
              name={club.name}
              description={club.description}
              book={club.book}
              locked={club.locked}
              posts={club.posts}
              
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any clubs yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ClubsList;