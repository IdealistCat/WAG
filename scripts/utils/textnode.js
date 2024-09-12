import { selectOption, showOption } from "./options.js";

export function showTextNode(textNodeIndex, textNodes, state, textElement, optionButtonsElement) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;

    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
  
    textNode.options.forEach(option => {
      if (showOption(option, state)) {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');

        button.addEventListener('click', () => selectOption(option, state));

        optionButtonsElement.appendChild(button);
      }
    })

    document.body.style = `background-image: url(${(option.image.length > 0) ? "/"+option : ""});`;
  }