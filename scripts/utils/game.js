import { showTextNode } from "./textnode";

export function startGame(textNodes, state, textElement, optionButtonsElement) {
    state = {}
    showTextNode(1, textNodes, state, textElement, optionButtonsElement);
}