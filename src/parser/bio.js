'use strict';

const debug = require('../debug')('bio:parser');

const xray = require('x-ray')
const parser = xray({
  filters: {
    toInt: function (value) {
      if (typeof value === 'string') {
        return parseInt(value);
      }
      return value;
    },
    split: function (value) {
      if (typeof value === 'string') {
        return value.split(',').map(s => s.trim()).filter(s => s.isEmpty);
      }
      return value;
    },
    nonRetardUnit: function (value) {
      if (typeof value === 'string') {
        return value.split('•').map(s => s.trim())[1];
      }
      return value;
    },
    parseStatsFromJs: function (value) {
      if (typeof value === 'string') {
        let regex = /stats_shdb = \[([0-9]+),([0-9]+),([0-9]+),([0-9]+),([0-9]+),([0-9]+)]/;
        let res = value.match(regex);
        return {
          intelligence: parseInt(res[1]),
          strength: parseInt(res[2]),
          speed: parseInt(res[3]),
          durability: parseInt(res[4]),
          power: parseInt(res[5]),
          combat: parseInt(res[6]),
        }
      }
      return value;
    },
    smartSplit: function (str) {
      var result = [];
      var start = 0;
      var marker = false;
      for (var i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === ')') {
          marker = !marker;
        }
        if (str[i] === ',' && !marker) {
          result.push(str.substr(start, i - start).trim());
          start = i + 1;
        }
      }
      if (start <= str.length) {
        result.push(str.substr(start, i - start).trim());
      }
      return result.filter(s => s.isEmpty);
    },
  }
});

const searchParser = html => {
  return new Promise((resolve, reject) => {
    debug('Parsing HTML %s', html);
    parser(html, {
      name: parser('h1'),
      realName: parser('h2'),
      score: parser('a[href$="class-info"] | toInt'),
      summary: parser('h3:contains("History") ~ p'),
      profile: parser('.profile-table', {
        fullName: 'td:contains("Full name") + td',
        aliases: 'td:contains("Aliases") + td | split',
        placeOfBirth: 'td:contains("Place of birth") + td',
        alignment: 'td:contains("Alignment") + td',
        occupation: 'td:contains("Occupation") + td',
        base: 'td:contains("Base") + td',
        relatives: 'td:contains("Relatives") + td | smartSplit',
        appearance: {
          gender: 'td:contains("Gender") + td',
          race: 'td:contains("Type / Race") + td',
          height: 'td:contains("Height") + td | nonRetardUnit',
          weight: 'td:contains("Weight") + td | nonRetardUnit',
          eyeColor: 'td:contains("Eye color") + td',
          hairColor: 'td:contains("Hair color") + td',
        },
      }),
      stats: parser('.stat-holder + script | parseStatsFromJs'),
    })(function (err, obj) {
      debug('Result: %O', obj);
      if (err) return reject(err);
      return resolve({
        href: html,
        slug: html.substring('http://www.superherodb.com/'.length).split('/')[0],
        ...obj
      });
    });
  });
};

module.exports = searchParser;
