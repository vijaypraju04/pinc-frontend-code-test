import { FETCH_POSTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}

// export default function(state = { posts: [], post: {} }, action) {
//   switch (action.type) {
//     case SHOW_POST:
//       return { ...state, post: action.payload };
//     case FETCH_POSTS:
//       return { ...state, posts: action.payload };
//     default:
//       return state;
//   }
// }
