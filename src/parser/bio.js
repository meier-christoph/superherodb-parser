'use strict';

const parser = require('x-ray')();

const searchParser = html => {
  return new Promise((resolve, reject) => {

    parser(html, {
      name: '.titlehome h1',
      real: '.titlehome h2',
      level: '.profileclass',
      stats: parser('.cblock:contains("Powerstats")', [{
        skill: ['.gridbarlabel'],
        val: ['.gridbarvalue']
      }]),
      bio: parser('.cblock:contains("Biography") .content table', [{
        label: ['tr td.table-label:first-child'],
        val: ['tr td:last-child']
      }])
    })(function(err, obj) {
      if (err) return reject(err);

      return resolve(obj);
    });
  });

};

module.exports = searchParser;
