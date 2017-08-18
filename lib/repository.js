const request = require('superagent');

const pkg = require('../package.json');



const subreddits = [
  'https://www.reddit.com/r/wholesomedogmemes/.json?limit=250'
];

function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

module.exports = {
  get: () => {
    return request
      .get(getRandom(subreddits))
      .set("User-Agent", "hubot-heck "+pkg.version)
      .then((rsp) => {
      const items = rsp.body.data.children;

      const itemsWithPreview = items.map((item) => {
        if(item.data.preview) {
          return item.data.preview
        }
      })
      .filter((item) => !!item)
      .map((item) => item.images[0].source.url);
      ;


      const randomUrl = getRandom(itemsWithPreview);


      return randomUrl;
    });
  }
};
