import { state } from "../../scripts/utils/options.js";

var paragraph = document.createElement('p');
paragraph.innerHTML = 'Tester Bester can you tell me what rhymes with Bester :)';

var data = [];
data.push(`current control level: ${state.controlLV}`);
data.push(`current path: ${localStorage.path}`);

for (let index = 0; index < data.length; index++) {
    const element = array[index];
    paragraph.innerHTML = element;
    document.getElementsByClassName('container')[0].append(paragraph);
}

document.getElementsByClassName('container')[0].append(paragraph);