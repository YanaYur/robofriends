import React from 'react';

const Scroll = (props) => {
  return (
    <div className="card-scroll">
         {props.children}
    </div>
  );
};

export default Scroll;