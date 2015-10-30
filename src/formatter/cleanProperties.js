'use strict';

const _ = require('lodash');
const camelCase = require('camelcase');

module.exports = (obj) => {
  return Object.keys(obj)
    .reduce((clean, key) => {
      const cleanKey = camelCase(key.toLowerCase());
      const val = obj[key];
      clean[cleanKey] = _.isString(val) ? val.trim() : val;
      return clean;
    }, {});
};
