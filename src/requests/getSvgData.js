import axios from 'axios';

const getSvgData = url => {
  return new Promise((resolve, reject) => {
    const request_url = url;
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

export default getSvgData;
