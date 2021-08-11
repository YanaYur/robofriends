  
import React from 'react';

const Card = ({ name, email, id }) => {
  debugger
  return (
    <div className='card-robots'>
      <img alt='robots' src={`${process.env.REACT_APP_IMAGE_URL}${id}${process.env.REACT_APP_SIZE}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;