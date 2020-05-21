import axios from 'axios';

const getSvgData = url => {
  return axios.get(url);
};

export default getSvgData;
