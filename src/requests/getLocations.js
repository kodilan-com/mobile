import instance from './instance';

const getLocations = () => {
  return instance.get(`posts/locations`);
};

export default getLocations;
