import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import responsesReducer from './responsesReducer';

export default combineReducers({
  user: userReducer,
  posts: postsReducer,
  responses: responsesReducer
});
