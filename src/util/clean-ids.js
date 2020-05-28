'use strict';

const config = require('../config');
const _ = require('lodash');

const cleanIds = (val) => {
  if (_.isString(val)) return val.trim().substring(config.BASE_URL.length);
  return val;
};

module.exports = cleanIds;
