// behind the scenes
export var VERSION = {
  major: 0,
  minor: 1,
  subtitle: "",
};

export function setVersionText() {
  var versionText = document.getElementById("version_text");
  versionText.innerHTML = `WAG v${VERSION.major}.${VERSION.minor}${VERSION.subtitle.length > 0 ? `_${VERSION.subtitle}` : ""}`;
}

// gameplay
export var textElement = document.getElementsByClassName("text");
export var optionButtonsElement = document.getElementById("option-buttons");

export var textNodes = [
  {
    id: 1,
    text: "you wake up in unknown lands, you are in a seemingly endless forest, and have no clue of what previously happened.",
    storyLength: "x",
    storyIndex: 1,
    options: [
      {
        text: "scream Hello",
        nextText: 2,
        setState: { controlLV: 10 }
      },
      {
        text: "run",
        nextText: 3,
        setState: { controlLV: 10 }
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
        text: "keep doing it",
        nextText: 2.1,
        setState: { controlLV: 9 }
      },
    ],
  },
  {
    id: 2.1,
    text: "you scream hello, just like in the movies, games, shows, and others, but no one answered.",
    storyLength: 4,
    storyIndex: 4,
    options: [
      {
        text: "keep doing it.",
        nextText: 2.2,
        setState: { controlLV: 8 },
        requiredState: { controlLV: 9 }
      },
    ],
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
      requiredState: { controlLV: 8 }
    },
    {
      text: "Keep Doing it.",
      nextText: 2.2,
      setState: { controlLV: 6 },
      requiredState: { controlLV: 7 }
    },
    {
      text: "Keep Doing It.",
      nextText: 2.2,
      setState: { controlLV: 5 },
      requiredState: { controlLV: 6 }
    },
    {
      text: "KeEp DoInG It.",
      nextText: 2.2,
      setState: { controlLV: 4 },
      requiredState: { controlLV: 5 }
    },
    {
      text: "KEEP DOING IT.",
      nextText: 2.2,
      setState: { controlLV: 3 },
      requiredState: { controlLV: 4 }
    },
    {
      text: "I WONT LET YOU STOP.",
      nextText: 2.2,
      setState: { controlLV: 2 },
      requiredState: { controlLV: 3 }
    },
    {
      text: "CONTINUE",
      nextText: 2.2,
      setState: { controlLV: 1 },
      requiredState: { controlLV: 2 }
    },
    {
      text: "DIE",
      nextText: -1,
      requiredState: { controlLV: 1 }
    },
    {
      text: "Pick up the stick, you know what to do with it.",
      condition: state.controlLV > 4
    }
    ],
  },
  {
    id: 3,
    text: "You stumble to the floor after trying to run.",
    storyLength: 3,
    storyIndex: 2,
    options: [
      {
        text: "run",
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "You stumble to the floor after trying to run. again.",
    storyLength: 3,
    storyIndex: 4,
    options: [
      {
        text: "stop trying",
        nextText: 5,
      },
      {
        text: "run",
        nextText: 6,
      },
    ],
  },
  {
    id: 5,
    text: "You stumble to the floor after trying to run.",
    storyLength: 4,
    storyIndex: 4,
    options: [
      {
        text: "RESET",
        nextText: -1,
      },
    ],
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
    ],
  },
  {
    id: 7,
    text: "You headed towards the city, everyone was confused by your appearence as they have never seen others come from the forest, they seem to know you.",
    storyIndex: 5,
    storyLength: 10,
    options: [
      {
        text: "look at them",
        nextText: 8,
      },
      {
        text: "ask for food",
        nextText: 9,
      },
      {
        text: "ask for food",
        nextText: 9,
      }
    ],
  },
];
