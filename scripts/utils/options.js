
export function showOption(option, state) {
    return option.requiredState == null || option.requiredState(state)
  }
  
  export function selectOption(option, state) {
   const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }