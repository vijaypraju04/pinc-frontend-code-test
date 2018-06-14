import axios from 'axios';
import { FETCH_CURRENT_USER } from './types';
import { FETCH_POSTS } from './types';

export const fetchAPI = () => async dispatch => {
  const res = await axios.get('https://staging-api.pincapp.com/api/questions');
  dispatch({ type: FETCH_CURRENT_USER, payload: res.data.included });
};
// const paginatedAPI = {};

export const fetchPosts = () => async dispatch => {
  const firstPage = await axios.get(
    'https://staging-api.pincapp.com/api/questions'
  );

  // const secondPage = await axios.get(firstPage['data']['links']['next']);
  //
  // const thirdPage = await axios.get(secondPage['data']['links']['next']);

  // const fourthPage = await axios.get(thirdPage['data']['links']['next']);
  // if (!!thirdPage) {
  //   console.log(thirdPage['data']['links']);
  // }
  // //
  // const fifthPage = await axios.get(fourthPage['data']['links']['next']);

  // paginatedAPI.firstPage = firstPage;
  // paginatedAPI.secondPage = secondPage;
  // paginatedAPI.thirdPage = thirdPage;
  // paginatedAPI.fourthPage = fourthPage;
  // paginatedAPI.fifthPage = fifthPage;
  //
  // console.log(paginatedAPI);

  dispatch({ type: FETCH_POSTS, payload: firstPage.data });
};
// export const fetchAPI = () =>
//   axios
//     .get('https://staging-api.pincapp.com/api/questions', {
//       method: 'no-cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json'
//       },
//       withCredentials: true,
//       credentials: 'same-origin'
//     })
//     .then(res => res.json())
//     .then(res => console.log(res));
