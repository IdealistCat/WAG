import { selectOption, showOption } from "./options.js";
import { textNodes, textElement, optionButtonsElement } from '../constants.js';

export function showTextNode(textNodeIndex = 1) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement[0].innerText = textNode.text;

    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
  
    textNode.options.forEach(option => {
      if (showOption(option, option.requiredState)) {
        // document.body.style = `background-image: url(${(option.image.length > 0) ? "/"+option : ""});`;

        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');

        button.addEventListener('click', () => selectOption(option));

        if (option.button_modifier != null)
          button.style = `background-color: ${option.button_modifier.color}; border-color: ${option.button_modifier.bordercolor};`;

        optionButtonsElement.appendChild(button);
      }
    })

    var sL = (textNode.storyLength == 'a') ? 100 : textNode.storyLength;

    var progressBar = document.getElementById('progressbar');
    progressBar.value = (textNode.storyLength == 'b') ? Math.random * 1000 : textNode.storyIndex / sL * 100;

    sL = (textNode.storyLength == 'a') ? '?' : textNode.storyLength;

    var progressBarTxt = document.getElementById('progress');
    progressBarTxt.innerHTML = `${(textNode.storyIndex == 'a') ? '?' : textNode.storyIndex}/${sL}`;

  }