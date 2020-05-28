'use strict';

const search = require('./search');
const hero = require('./hero');

const heroUrls = (heroPath) => {
  return {
    bio: hero('bio', heroPath),
    // history: hero('history', heroPath),
    powers: hero('powers', heroPath),
  };
};

module.exports = {
  search,
  heroUrls,
};
