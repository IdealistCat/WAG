import { showTextNode } from "./scripts/utils/textnode.js";

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

const textNodes = [
]

function startGame() {
  state = {}
  showTextNode(1, textNodes, state, textElement, optionButtonsElement);
}

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

startGame();