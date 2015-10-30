'use strict';

const request = require('request-promise');

const getSearchUrl = require('./urls').search;
const parse = require('./parser/search');
const format = require('./formatter/search');

module.exports = (term) => request(getSearchUrl(term)).then(parse).then(format);
