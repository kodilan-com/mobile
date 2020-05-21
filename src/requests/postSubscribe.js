import instance from './instance';

const getRecentlyPosts = ({email, frequency, name}) => {
  return instance.post('newsletters', {
    email,
    frequency,
    name,
  });
};

export default getRecentlyPosts;
