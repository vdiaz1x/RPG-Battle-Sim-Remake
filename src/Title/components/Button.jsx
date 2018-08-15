import React from 'react';

function Button(props) {
  return (
    <button className="button button-title">
      {props.message}
    </button>
  );
}

export default Button;
