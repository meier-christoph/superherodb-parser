'use strict';

const debug = require('./debug')('fetch');
const urls = require('./urls');
const parser = require('./parser');
const formatter = require('./formatter');
const merge = require('./util/merge');
const cleanHero = require('./util/clean-props');

const fetch = (heroPath) => {
  const heroUrls = urls.heroUrls(heroPath);

  const promises = Object.keys(heroUrls)
    .map(type => {
      debug(`Fetching ${type} from ${heroUrls[type]}`);
      return Promise.resolve(heroUrls[type])
        .then(parser[type])
        .then(formatter[type]);
    });

  return Promise
    .all(promises)
    .then(list => merge(list))
    .then(cleanHero);
};

module.exports = fetch;
