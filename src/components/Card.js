import React from "react";

function Card({ key, img, text, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt={text}></img>
      {text}
    </div>  
  );
}


export default Card;