import { startGame } from "./scripts/utils/game.js";
import { addTextNode } from "./scripts/utils/textnode.js";

const textElement = document.getElementsByClassName('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};
const textNodes = [];

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

textNodes = addTextNode(textNodes, {
  id: 1,
  text: 'you wake up in unknown lands, you are in a seemingly endless forest, and have no clue of what previously happened.',
  options: [
    {
      text: '"Hello?"',
      nextText: -1
    }
  ]
})

startGame(textNodes, state, textElement, optionButtonsElement);