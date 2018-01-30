import Star from 'database/models/Star';

const star = (() => {
  return {
    service: (user, content, callback) => {
      console.log('content, ', content);
      console.log('callback, ', callback);
    },
    service2: () => {
      console.log('tarot service');
    },
  };
})();

export default star;
