import { startGame } from "./game.js";
import { showTextNode } from "./textnode.js";

export let state = {};

export function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
  }
  
  export function selectOption(option) {
   var nextTextNodeId = option.nextText;

    if (nextTextNodeId <= 0) {
      return startGame();
    }

    state = Object.assign(state, option.setState);

    showTextNode(nextTextNodeId);
  }