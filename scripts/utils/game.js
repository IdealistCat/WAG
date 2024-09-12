import { showTextNode } from "./textnode.js";

export function startGame(textNodes, state, textElement, optionButtonsElement) {
    state = {}
    showTextNode(1, textNodes, state, textElement, optionButtonsElement);
}