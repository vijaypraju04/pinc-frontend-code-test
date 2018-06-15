import { FETCH_RESPONSES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESPONSES:
      console.log(action.payload['data']['0']);
      return action.payload;
    default:
      return state;
  }
}
