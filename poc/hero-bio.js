'use strict';

var request = require('request');
var xray = require('x-ray');
var x = xray();

const URL = 'http://www.superherodb.com/iron-man/10-85/';

request(URL, (err, res) => {
    const HTML = res.body;

    x(HTML, {
        name: '.titlehome h1',
        real: '.titlehome h2',
        level: '.profileclass',
        stats: x('.cblock:contains("Powerstats")', [{
            skill: ['.gridbarlabel'],
            val: ['.gridbarvalue']
        }]),
        bio: x('.cblock:contains("Biography") .content table', [{
            label: ['tr td.table-label:first-child'],
            val: ['tr td:last-child']
        }])
    })(function(err, obj) {
      console.log( JSON.stringify(obj, null, 2) );
    });
});
