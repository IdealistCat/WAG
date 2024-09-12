export var textElement = document.getElementsByClassName('text');
export var optionButtonsElement = document.getElementById('option-buttons');

export const textNodes = [
  {
    id: 1,
    text: 'you wake up in unknown lands, you are in a seemingly endless forest, and have no clue of what previously happened.',
    storyLength: 'x',
    storyIndex: 1,
    options: [
      {
        text: 'say Hello',
        nextText: 2
      },
      {
        text: 'run',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'you say hello, just like in the movies, games, shows, and others, but no one answered.',
    storyLength: 2,
    storyIndex: 2,
    options: [
      {
        text: 'reset',
        nextText: -1
      }
    ]
  },
  {
    id: 3,
    text: 'You stumble to the floor after trying to run.',
    storyLength: 3,
    storyIndex: 2,
    options: [
      {
        text: 'run',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'You stumble to the floor after trying to run.',
    storyLength: 3,
    storyIndex: 3,
    options: [
      {
        text: 'stop trying',
        nextText: -1
      }
    ]
  }
];