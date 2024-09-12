import { showTextNode } from "./textnode.js";
import { state } from "../constants.js"

export function startGame() {
    state = {};
    showTextNode(1);
}