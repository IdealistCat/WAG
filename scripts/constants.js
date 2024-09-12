import { state } from "./utils/options.js";

// behind the scenes
export var VERSION = {
  major: 0,
  minor: 1,
  subtitle: "",
};

export function setVersionText() {
  var versionText = document.getElementById("version_text");
  versionText.innerHTML = `WAG v${VERSION.major}.${VERSION.minor}${
    VERSION.subtitle.length > 0 ? `_${VERSION.subtitle}` : ""
  }`;
}

// Thymine
export var stringToColor = (string, saturation = 100, lightness = 75, alpha = 1) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
hash = string.charCodeAt(i) + ((hash << 5) - hash);
hash = hash & hash;
  }
  return `hsla(${(hash % 360)}, ${saturation}%, ${lightness}%, ${alpha})`;
}

// gameplay
export var textElement = document.getElementsByClassName("text");
export var optionButtonsElement = document.getElementById("option-buttons");

export var textNodes = [
  {
    id: 1,
    text: "you wake up in unknown lands, you are in a seemingly endless forest, and have no clue of what previously happened.",
    storyLength: "a",
    storyIndex: 1,
    options: [
      {
        text: "scream Hello",
        nextText: 2,
        setState: { controlLV: 10 },
      },
      {
        text: "run",
        nextText: 3,
        setState: { controlLV: 10 },
      },
    ],
  },
  {
    id: 2,
    text: "you scream hello, just like in the movies, games, shows, and others, but no one answered.",
    storyLength: 2,
    storyIndex: 2,
    options: [
      {
        text: "keep doing it!",
        nextText: 2.1,
        setState: { controlLV: 9 },
        requiredState: { value: 'controlLV', expected_value: 10 }
      }
    ]
  },
  {
    id: 2.1,
    text: "you scream hello, again. Nothing happened.",
    storyLength: 4,
    storyIndex: 3,
    options: [
      {
        text: "keep doing it.",
        nextText: 2.2,
        setState: { controlLV: 8 },
        requiredState: { value: 'controlLV', expected_value: 9 }
      }
    ]
  },
  {
    id: 2.2,
    text: "you scream hello once more, but you notice a stick, on the floor",
    storyLength: 4,
    storyIndex: 4,
    options: [
      {
        text: "Keep doing it.",
        nextText: 2.2,
        setState: { controlLV: 7 },
        requiredState: { value: 'controlLV', expected_value: 8 }
      },
      {
        text: "Keep Doing it.",
        nextText: 2.2,
        setState: { controlLV: 6 },
        requiredState: { value: 'controlLV', expected_value: 7 }
      },
      {
        text: "Keep Doing It.",
        nextText: 2.2,
        setState: { controlLV: 5 },
        requiredState: { value: 'controlLV', expected_value: 6 }
      },
      {
        text: "KeEp DoInG It.",
        nextText: 2.3,
        setState: { controlLV: 4 },
        requiredState: { value: 'controlLV', expected_value: 5 },
        button_modifier: { color: stringToColor(150, 100, 50), bordercolor: stringToColor(150, 100, 30, 1)}
      },
      {
        text: "Pick up the stick, you know what to do with it.",
        nextText: -1,
        setState: { controlLV: 4 },
      }
    ]
  },
  {
    id: 2.3,
    text: "SCREAM",
    storyLength: Math.random() * 10000,
    storyIndex: Math.random() * 10000,
    options: [
      {
        text: "SyO[ KEEP DOING IT.",
        nextText: 2.3,
        setState: { controlLV: 3 },
        requiredState: { value: 'controlLV', expected_value: 4 },
        button_modifier: { color: stringToColor(100, 100, 50), bordercolor: stringToColor(100, 100, 30, 1)}
      },
      {
        text: "I WONT LET YOU STOP.",
        nextText: 2.3,
        setState: { controlLV: 2 },
        requiredState: { value: 'controlLV', expected_value: 3 },
        button_modifier: { color: stringToColor(50, 100, 50), bordercolor: stringToColor(50, 100, 30, 1)}
      },
      {
        text: "CONTINUE",
        nextText: 2.3,
        requiredState: { value: 'controlLV', expected_value: 2 },
        button_modifier: { color: stringToColor(0, 100, 50), bordercolor: stringToColor(0, 100, 30, 1)}
      }
    ]
  },
  {
    id: 3,
    text: "You stumble to the floor after trying to run.",
    storyLength: 3,
    storyIndex: 2,
    options: [
      {
        text: "run",
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: "You stumble to the floor after trying to run. again.",
    storyLength: 3,
    storyIndex: 4,
    options: [
      {
        text: "stop trying",
        nextText: 5
      },
      {
        text: "run",
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: "You stumble to the floor after trying to run.",
    storyLength: 4,
    storyIndex: 4,
    options: [
      {
        text: "RESET",
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: "You decided to continue running instead of accepting your fate. And instead of falling you have found civilization.",
    storyLength: 10,
    storyIndex: 4,
    options: [
      {
        text: "Head towards the city",
        nextText: 7,
        setState: { wentToCity: true }
      },
      {
        text: "keep running, they won't understand.",
        nextText: -1,
        setState: { controlLV: 9 }
      }
    ]
  },
  {
    id: 7,
    text: "You headed towards the city, everyone was confused by your appearence as they have never seen others come from the forest, they seem to know you.",
    storyIndex: 5,
    storyLength: 10,
    options: [
      {
        text: "look at them",
        nextText: 8
      },
      {
        text: "ask for food",
        nextText: 9
      },
      {
        text: "ask for food",
        nextText: 10
      }
    ]
  }
]


/*
{
        text: "KEEP DOING IT.",
        nextText: 2.2,
        setState: { controlLV: 3 },
        requiredState: { value: 'controlLV', expected_value: 4 }
      },
      {
        text: "I WONT LET YOU STOP.",
        nextText: 2.2,
        setState: { controlLV: 2 },
        requiredState: { value: 'controlLV', expected_value: 3 }
      },
      {
        text: "CONTINUE",
        nextText: 2.2,
        setState: { controlLV: 1 },
        requiredState: { value: 'controlLV', expected_value: 2 }
      },
      {
        text: "DIE",
        nextText: -1,
        requiredState: { value: 'controlLV', expected_value: 1 }
      }
*/