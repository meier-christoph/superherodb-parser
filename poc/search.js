'use strict';

var request = require('request');
var xray = require('x-ray');
var parser = xray();

const SEARCH_URL = 'http://www.superherodb.com/search_query.php?q=mega';

request(SEARCH_URL, (err, res) => {
  const HTML = res.body;

  parser(HTML, {
    total: '.searchresulthead:first-child',
    results: parser('.searchresultrow', [{
      link: 'a@href',
      match: 'a',
      type: 'i@class'
    }]),
  })(function(err, obj) {
    console.log( JSON.stringify(obj, null, 2) );
  });
});
