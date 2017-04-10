'use strict';

const shdb = require('../src');

shdb.fetchAll().then((res) => {
  console.log('Your hero stats: ', JSON.stringify(res, null, 2) );
});
