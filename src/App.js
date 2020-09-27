import React, { Component } from 'react';
import Nav from "./Components/Nav/Nav";
import Container from "./Components/Container/Container";
import Instructions from "./Components/Instructions/Instructions";
import CardsDisplay from "./Components/Cards/CardsDisplay";
import cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import './App.css';


class App extends Component{
    state={
    clickedImages: [],
    cardsArr: cards,
    score: 0,
    highestScore: 0,
    status: ""
};


shuffleImages= id => {
    console.log(id);
    let clickedImages = this.state.clickedImages;

    if(clickedImages.includes(id)){
        alert("Sorry! You already visited there once!");
        const refreshCards =
        cards.map(c => {
            return c;

        })
        const shuffleImages = refreshCards.sort((a,b) => 0.5 - Math.random())
        this.setState({ cardsArr:shuffleImages, clickedImages: [], score: 0, status: "Game Over! You Lost. Click to play again!"});
        return;
    }else{
        clickedImages.push(id)
        console.log("click function working");
        const shuffleImages = this.state.cardsArr.sort((a,b) => 0.5 - Math.random())
        this.setState({cardsArr: shuffleImages, score:this.state.score +1}) 
        

        if(clickedImages.length === 15){
            this.setState({score: 15, status: "You Won! Great Job", clickedImages: []});
            alert("You Win! You visited all 15 cities!");
            return;
        }
 
        this.setState({ cardsArr:shuffleImages, clickedImages, score: clickedImages.length, status: " " });
    }
}



render(){
      return(

        <div>
          <Nav score ={this.state.score} goal ={this.state.highestScore} />
          <Container>
            <Instructions />
            <CardsDisplay cardsArr ={this.state.cardsArr} shuffleImages={this.shuffleImages} />
          </Container>
          <Footer />
        </div>
      );
}
}

export default App;