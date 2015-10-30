'use strict';

const _ = require('lodash');

const cleanProperties = require('./cleanProperties');
const formatStats = require('./stats');
const merge = require('./merge');

module.exports = (obj) => {

  const bio = _.map(obj.bio, (data) => _.zipObject(data.label, data.val));

  return {
    name: obj.name,
    realName: obj.real,
    level: Number(obj.level),
    bio: cleanProperties(merge(bio)),
    stats: cleanProperties(formatStats(obj.stats))
  };
};
