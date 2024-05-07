import React from "react";

const Tile = ({ className, value, onClick, playerTurn }) => {
  let hoverClass = null;
  if (value === null && playerTurn !== null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }

  return (
    <button onClick={onClick} className={`tile ${className} ${hoverClass}`}>
      {value}
    </button>
  );
};

export default Tile;
