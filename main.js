import { startGame } from "./scripts/utils/game.js";
import { setVersionText } from "./scripts/constants.js";
import { getAll, getSave } from "./scripts/utils/localstorage.js";

setVersionText();
// getAll();
startGame(getSave('savecode'));