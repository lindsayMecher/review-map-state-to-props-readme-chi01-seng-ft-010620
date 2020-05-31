// export the reducer on same line it's defined.
// switch based on action type.
// always make a copy of the obj. Don't mutate obj.
// 

export default function shoppingListItemReducer(state = {
  items: ['initial item'], 
  users: [ 'initial user' ]
}, action) {

  switch(action.type) {

    case 'GET_COUNT_OF_ITEMS':
      return Object.assign({}, state, {
        items: state.items.concat(state.items.length + 1)
      });

    case 'GET_COUNT_OF_USERS':
      return Object.assign({}, state, {
        users: state.users.concat(state.users.length + 1)
      });

    default:
      return state;
  }
};

// Object.assign notes

// const state = {
//   items: [1,2,3],
//   users: ["a", "b"]
// };

// // create a new empty obj that copies the entire obj called "state"
// // then updates the value of the items key.
// const newState = Object.assign({}, state, {
//   items: state.items.concat('num')
// });

// console.log(newState)
// console.log(state)