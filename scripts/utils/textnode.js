import { selectOption, showOption } from "./options.js";
import { textNodes, textElement, optionButtonsElement } from '../constants.js';

export function showTextNode(textNodeIndex = 1) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement[0].innerText = textNode.text;

    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
  
    textNode.options.forEach(option => {
      if (showOption(option)) {
        // document.body.style = `background-image: url(${(option.image.length > 0) ? "/"+option : ""});`;

        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');

        button.addEventListener('click', () => selectOption(option));

        optionButtonsElement.appendChild(button);
      }
    })
  }