import axios from 'axios';

const getRecentlyPosts = () => {
  return new Promise((resolve, reject) => {
    const request_url = 'https://api.kodilan.com/posts?get=25&period=monthly';
    axios({
      method: 'GET',
      url: request_url,
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default getRecentlyPosts;
