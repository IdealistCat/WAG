import { startGame } from "./scripts/utils/game.js";
import { setVersionText } from "./scripts/constants.js";
import { findPath, updatePath } from "./scripts/utils/path.js";

document.getElementById('reset').onclick = function() {
    localStorage.path = 'Beginning';
    location.pathname = '/index.html';
};

var lastPath = findPath(localStorage.path);
// console.log(lastPath);

// updatePath(lastPath+'c');

setVersionText();
startGame((lastPath != null) ? lastPath : 1);