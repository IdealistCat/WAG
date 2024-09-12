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
    text: 'You stumble to the floor after trying to run. again.',
    storyLength: 3,
    storyIndex: 4,
    options: [
      {
        text: 'stop trying',
        nextText: 5
      },
      {
        text: 'run',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'You stumble to the floor after trying to run.',
    storyLength: 4,
    storyIndex: 4,
    options: [
      {
        text: 'RESET',
        nextText: -1
      }
    ]
  },

  {
    id: 6,
    text: 'You decided to continue running instead of accepting your fate. And instead of falling you have found civilization.',
    storyLength: 4,
    storyIndex: 4,
    options: [
      {
        text: 'Head towards the city',
        nextText: 7
      }
    ]
  }
];