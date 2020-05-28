'use strict';

const shdb = require('../src');

const heroId = '/black-widow-mcu/10-12499/';

shdb.fetch(heroId).then((res) => {
  console.log('Your hero stats: ', JSON.stringify(res, null, 2));
});
