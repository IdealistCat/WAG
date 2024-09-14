import { textNodes } from "../constants.js";

export function updatePath(path = 'Beginning') {
    localStorage.path = path;
    document.getElementById('path').innerText = `Path: ${path}`;
}

export function findPath(path = 'Beginning') {
    for (let index = 0; index < textNodes.length; index++) {
        const element = textNodes[index];
        
        if (element.path == path)
            return index;
    }

    return 1;
}