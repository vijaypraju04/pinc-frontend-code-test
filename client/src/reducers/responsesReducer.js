import { FETCH_RESPONSES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RESPONSES:
      // console.warn('ID', action.payload['data']['0'].id);
      // return action.payload
      return {
        ...state,
        [action.payload['data']['0'].attributes.question_id]: action.payload
      };
    default:
      return state;
  }
}
