import axios from 'axios';

const getCompanyPosts = company_slug => {
  return new Promise((resolve, reject) => {
    const request_url = `https://api.kodilan.com/companies/${company_slug}/posts`;
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

export default getCompanyPosts;
