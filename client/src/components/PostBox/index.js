import React, { useState, useEffect } from "react";
// import { useStoreContext } from '../../utils/GlobalState';
// import { useQuery } from '@apollo/client';
// import { UPDATE_POST } from '../../utils/mutations';

function PostBox(post) {
  let { _id, text, user /*likes, dislikes*/ } = post;

  return (
    <div className="card px-1 py-1">
      <h3>{user}</h3>
      <p>{text}</p>
      {/* <button onClick={functionHandleLikes}>Likes: {likes}</button> */}
      <br></br>
      {/* <span>Dislikes: {dislikes}</span> */}
    </div>
  );
}

export default PostBox;
