import instance from './instance';

const getCompanyPosts = company_slug => {
  return instance.get(`companies/${company_slug}/posts`);
};

export default getCompanyPosts;
