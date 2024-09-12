import { startGame } from "./scripts/utils/game.js";

var textElement = document.getElementsByClassName('text');
var optionButtonsElement = document.getElementById('option-buttons');

let state = {};
const textNodes = [
  {
    id: 1,
    text: 'you wake up in unknown lands, you are in a seemingly endless forest, and have no clue of what previously happened.',
    
    options: [
      {
        text: 'say Hello',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'you say hello, just like in the movies, games, shows, and others, but no one answered.',
    options: [
      {
        text: 'reset',
        nextText: -1
      }
    ]
  }
];

/* addTextNode(
    {
        id: 11,
        text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
        options: [
          {
            text: 'Congratulations. Play Again.',
            nextText: -1
          }
        ]
    }
); */

startGame(textNodes, state, textElement[0], optionButtonsElement);