import React from 'react';

function Button(props) {
  // separating the props for easier use
  const { message, play } = props;

  return (
    <button
      type="button"
      className="button button-title brackets_left brackets_right"
      onClick={play}
    >
      {message}
    </button>
  );
}

export default Button;
