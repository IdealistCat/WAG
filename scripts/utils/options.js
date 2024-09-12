import { startGame } from "./game.js";
import { showTextNode } from "./textnode.js";

export let state = {};

export function showOption(option, data = {value:1, expected_value:0}) {
  var value = '';

  switch (data.value) {
    case 'controlLV':
      value = state.controlLV;
  }

    return option.requiredState == null || value == data.expected_value;
  }
  
  export function selectOption(option) {
   var nextTextNodeId = option.nextText;

    if (nextTextNodeId <= 0) {
      return startGame();
    }

    state = Object.assign(state, option.setState);

    showTextNode(nextTextNodeId);
  }