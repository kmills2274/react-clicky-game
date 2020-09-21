import React from "react";
import '../Cards/Cards';



const CardsDisplay = (props) => (

            <div>{props.cardsArr.map(card=>(
              <img onClick={() => props.shuffleImages(card.id)} src={require(`./Images/${card.img}`)} alt="CityImage"/>
                ))} 
            </div>
    
);
  export default CardsDisplay;