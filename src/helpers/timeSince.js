const timeSince = date => {
  let seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + ' yıl';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' ay';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' gün';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' saat';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' dakika';
  }
  return Math.floor(seconds) + ' seconds';
};

export default timeSince;
