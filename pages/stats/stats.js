import { state } from "../../scripts/utils/options.js";

addPar(`current path: ${localStorage.path}`);
addPar(`current control level: ${(state.controlLV == undefined) ? 10 : state.controlLV}/10`);
addPar(`resets: ${(localStorage.resets == undefined || localStorage.resets == NaN) ? 0 : localStorage.resets}`);

function addPar(data) {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'Tester Bester can you tell me what rhymes with Bester :)';
    paragraph.innerHTML = data;
    document.getElementsByClassName('container')[0].append(paragraph);
}