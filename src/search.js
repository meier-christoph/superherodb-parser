'use strict';

const getSearchUrl = require('./urls').search;
const debug = require('./debug')('search');
const parse = require('./parser/search');
const format = require('./formatter/search');

module.exports = (term) => {
  return getSearchUrl(term)
    .then(parse)
    .then(format);
};
