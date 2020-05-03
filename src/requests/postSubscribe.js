import axios from 'axios';

const getRecentlyPosts = ({email, frequency, name}) => {
  return new Promise((resolve, reject) => {
    const request_url = 'https://api.kodilan.com/newsletters';
    axios({
      method: 'POST',
      url: request_url,
      data: {
        email,
        frequency,
        name,
      },
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
