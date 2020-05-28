'use strict';

const shdb = require('../src');

const heroName = 'hulk';

shdb.search(heroName).then((res) => {
  console.log('Search result : ');
  console.log(JSON.stringify(res, null, 2));
});
