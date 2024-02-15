import React from 'react'

const Button = ({ buttonText }) => {
  return (
    <div>
      <button className="btn">{buttonText}</button>
    </div>
  );
};

export default Button