'use strict';

const xray = require('x-ray')
const parser = xray();

const searchParser = html => {
  return new Promise((resolve, reject) => {
    parser(html, {
      history: parser('h3 ~ p')
    })(function (err, obj) {
      if (err) return reject(err);
      return resolve(obj);
    });
  });
};

module.exports = searchParser;
