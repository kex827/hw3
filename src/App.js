// React Poker

// GOAL
// When the application is launched, show five face down cards, and a button that
// reads "Deal a new hand". Each time the "deal a new hand" button is clicked, show
// five random, unique playing cards.

// HINTS
// - The initial state of the state object is already set for you.
// - You can create an array of JSX elements and add them to the return of the render() function in
// - one line. The framework for doing this is already there.
// - Add an element to an array by using the .push() function
// - Grab the few n elements of an array by using the .splice() function, e.g. myArray.splice(0, n)
// - The card images follow this convention: http://golearntocode.com/images/cards/8_of_diamonds.png
// - Calling shuffledDeck() will give you an array of 52 strings, representing the rank and suit of
//   each card, in random order
// - Start by getting the five face down cards to show, then use the React developer tools in Chrome
//   to manipulate state manually, then write an event handler function and corresponding button.
import React, { Component } from 'react';
import shuffledDeck from './ShuffledDeck';
import './App.css';

class App extends Component {
  constructor() {
    super();
    let hand = ["face_down", "face_down", "face_down", "face_down", "face_down"]
    this.state = {
      hand: hand,
      card1: hand[0],
      card2: hand[1],
      card3: hand[2],
      card4: hand[3],
      card5: hand[4]
    }
  }


dealHand () {
      this.setState({
        hand: shuffledDeck(),
      })
    }



  render() {
    // array to hold JSX elements
    let card1Image = 'http://golearntocode.com/images/cards/' + this.state.hand[0] + '.png';
    let card2Image = 'http://golearntocode.com/images/cards/' + this.state.hand[1] + '.png';
    let card3Image = 'http://golearntocode.com/images/cards/' + this.state.hand[2] + '.png';
    let card4Image = 'http://golearntocode.com/images/cards/' + this.state.hand[3] + '.png';
    let card5Image = 'http://golearntocode.com/images/cards/' + this.state.hand[4] + '.png';

    return (
      <div className="App">
        <h1>
        <img src={card1Image} />x
        <img src={card2Image} />
        <img src={card3Image} />
        <img src={card4Image} />
        <img src={card5Image} />
        </h1>
        <p><button onClick={() => this.dealHand()}>Deal New Hand</button></p>
      </div>
    );
  }
}


export default App;
