import React, { useState, useEffect } from "react";

import uniqid from "uniqid";

import Scoreboard from "./Scoreboard"
import Card from "./Card";

import walter from "../static/WalterWhite.webp"
import walterJr from "../static/walterjr.png"
import tuco from "../static/tucosalamanca.jpg"
import skyler from "../static/skylerwhite.jpeg"
import saul from "../static/saulgoodman.webp"
import mike from "../static/mikeehrmantraut.webp"
import jesse from "../static/jessepinkman.webp"
import huel from "../static/huelbabineaux.avif"
import hector from "../static/hectorsalamanca.jpg"
import hank from "../static/hankschrader.jpg"
import gustavo from "../static/gustavofring.webp"
import gale from "../static/galeboetticher.jpg"

import "../styles/main.css"


function Main() {
    const [cards, setCards] = useState(
        [
            { key: uniqid(), img: walter, text: "Walter" },
            { key: uniqid(), img: walterJr, text: "Walter Jr" },
            { key: uniqid(), img: tuco, text: "Tuco" },
            { key: uniqid(), img: saul, text: "Saul" },
            { key: uniqid(), img: mike, text: "Mike" },
            { key: uniqid(), img: skyler, text: "Skyler" },
            { key: uniqid(), img: jesse, text: "Jesse" },
            { key: uniqid(), img: huel, text: "Huel" },
            { key: uniqid(), img: hector, text: "Hector" },
            { key: uniqid(), img: hank, text: "Hank" },
            { key: uniqid(), img: gustavo, text: "Gustavo" },
            { key: uniqid(), img: gale, text: "Gale" },
        ]
    )

    const displayCards = () => {
        return cards.map(card => (
            <Card key={card.key} img={card.img} text={card.text} onClick={randomOrder}/>
        ));
    }

    const randomOrder = () => {
        const shuffledCards = [...cards];
        shuffledCards.sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
      };
      

    useEffect(() => {
        randomOrder();
    }, [])

  return (
    <div className="main">
      <div className="card-grid">
        {displayCards()}
      </div>
    </div>  
  );
}


export default Main;