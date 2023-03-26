import React from "react";

function Card({ id, img, text, onClick }) {

  const handleClick = (e) => {
    onClick(e.currentTarget.dataset.id);
  }
  return (
    <div data-id={id} className="card" onClick={handleClick}>
      <img src={img} alt={text}></img>
      {text}
    </div>  
  );
}


export default Card;