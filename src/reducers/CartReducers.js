export default(state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
    return [...state, action.item]
    default:
      return state
  }
}

// Switch statement conditionals are used in place of if/else if conditionals because they read more cleanly.
