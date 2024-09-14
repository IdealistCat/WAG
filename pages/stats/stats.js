import { state } from "../../scripts/utils/options.js";

var data = [];
data.push(`current path: ${localStorage.path}`);
data.push(`current control level: ${(state.controlLV == undefined) ? 10 : state.controlLV}/10`);
data.push(`resets: ${(localStorage.resets == undefined) ? 0 : localStorage.resets}`);

for (let index = 0; index < data.length; index++) {
    const element = data[index];

    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'Tester Bester can you tell me what rhymes with Bester :)';
    paragraph.innerHTML = element;
    document.getElementsByClassName('container')[0].append(paragraph);
}

document.getElementsByClassName('container')[0].append(paragraph);