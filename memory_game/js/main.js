var cards = ["queen","queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

function flipCard(cardId) {
  console.log("User flipped " +  cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
};

flipCard(0);
flipCard(2);

/* Note to GA: Slide 9 of the "Project: Functions (JavaScript)" shows that the console should be logging the following:
      User flipped queen
      User flipped king
      Sorry, try again.
  
  However, the instructions to put the checkForMatch call at the end of the flipCard function means that "Sorry, try again" 
  is printed after the first flipCard call as well as after the second.
*/
