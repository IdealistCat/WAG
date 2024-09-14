import { startGame } from "./scripts/utils/game.js";
import { setVersionText } from "./scripts/constants.js";
import { findPath, updatePath } from "./scripts/utils/path.js";

document.getElementById('reset').onclick = function() {
    localStorage.path = 'Beginning';
    
    if (localStorage.resets == undefined || localStorage.resets == NaN) localStorage.resets = 0;
    // localStorage.resets = 1;
    localStorage.resets = parseInt(localStorage.resets) + 1;
    
    location.pathname = '/index.html';
};

var lastPath = findPath(localStorage.path);

setVersionText();
startGame((lastPath != null) ? lastPath : 1);