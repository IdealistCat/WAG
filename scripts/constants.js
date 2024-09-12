export var textElement = document.getElementsByClassName('text');
export var optionButtonsElement = document.getElementById('option-buttons');

export let state = {};
export const textNodes = [
  {
    id: 1,
    text: 'you wake up in unknown lands, you are in a seemingly endless forest, and have no clue of what previously happened.',
    
    options: [
      {
        text: 'say Hello',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'you say hello, just like in the movies, games, shows, and others, but no one answered.',
    options: [
      {
        text: 'reset',
        nextText: -1
      }
    ]
  }
];