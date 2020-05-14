import axios from 'axios';

const getSearchPosts = params => {
  return new Promise((resolve, reject) => {
    const request_url = 'https://api.kodilan.com/search';
    axios({
      method: 'GET',
      url: request_url,
      params: params,
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default getSearchPosts;
