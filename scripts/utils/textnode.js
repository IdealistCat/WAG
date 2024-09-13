import { selectOption, showOption } from "./options.js";
import { textNodes, textElement, optionButtonsElement } from "../constants.js";

export function showTextNode(textNodeIndex = 1) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement[0].innerText = textNode.text;

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  document.body.style = `background-image: url('./images/${(textNode.image == null) ? 'forest' : textNode.image}.png');`;

  textNode.options.forEach((option) => {
    if (showOption(option, option.requiredState)) {
      // document.body.style = `background-image: url(${(option.image.length > 0) ? "/"+option : ""});`;

      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");

      button.addEventListener("click", () => selectOption(option));

      if (option.color != null) {
        button.style = `background-color:#0af; border-color:#069;`;

        // #abc
        if (option.color == "red")
          button.style = `background-color:#f00; border-color:#900;`;
        if (option.color == "yellow")
          button.style = `color:#000; background-color:#ff0; border-color:#990;`;
        if (option.color == "green")
          button.style = `background-color:#0f0; border-color:#090;`;
        if (option.color == "cyan")
          button.style = `background-color:#0ff; border-color:#099;`;
        if (option.color == "blue")
          button.style = `background-color:#00f; border-color:#009;`;
        if (option.color == "pink")
          button.style = `background-color:#f0f; border-color:#909;`;

        // #abcdef

        // special
        if (option.color.startsWith("#"))
          button.style = `color: ${
            option.textcolor != null ? option.textcolor : "#fff"
          }; background-color: ${option.color}; border-color: ${
            option.bordercolor != null ? option.bordercolor : "#000"
          };`;
      }

      optionButtonsElement.appendChild(button);
    }
  });

  var sL = textNode.storyLength == "a" ? 100 : textNode.storyLength;

  var progressBar = document.getElementById("progressbar");
  progressBar.value =
    textNode.storyLength == "b"
      ? Math.random * 1000
      : (textNode.storyIndex / sL) * 100;

  sL = textNode.storyLength == "a" ? "?" : textNode.storyLength;

  var progressBarTxt = document.getElementById("progress");
  progressBarTxt.innerHTML = `${
    textNode.storyIndex == "a" ? "?" : textNode.storyIndex
  }/${sL}`;
}
