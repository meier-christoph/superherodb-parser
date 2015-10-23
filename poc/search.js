'use strict';

var request = require('request');
var xray = require('x-ray');
var x = xray();

//const SEARCH_URL = 'http://www.superherodb.com/search_query.php?q={{query}}';
const SEARCH_URL = 'http://www.superherodb.com/search_query.php?q=mega';

request(SEARCH_URL, (err, res) => {
    const HTML = res.body;

    x(HTML, {
        total: '.searchresulthead:first-child',
        results: x('.searchresultrow', [{
            link: 'a@href',
            match: 'a',
            type: 'i@class'
        }]),
    })(function(err, obj) {
      console.log( JSON.stringify(obj, null, 2) );
    });
});
