import axios from 'axios';

const getTagPosts = (tag) => {
  return new Promise((resolve, reject) => {
    const request_url = `https://api.kodilan.com/tags/${tag}/posts`;
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

export default getTagPosts;
