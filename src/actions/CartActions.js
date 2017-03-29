// Action Creator function
// This action will be called from a button in the UI

export const addToCart = (item) => {
  console.log(`ACTION: adding ${item} to cart`)
  return {
     //actions must have a type property
     type: 'ADD_ITEM',
     item // ES6 shorthand for {item: item}
  }
}

 //action naming conventions: all caps with snake-case (JAVASCRIPT_CONSTANT naming convention )
