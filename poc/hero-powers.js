'use strict';

var request = require('request');
var xray = require('x-ray');
var x = xray();

const URL = 'http://www.superherodb.com/iron-man/10-85/powers/';

request(URL, (err, res) => {
    const HTML = res.body;

    x(HTML, {
        powers: x('.cblock:contains(" Powers")', [{
            powers: x('h3:contains(" Powers") + div.content', ['h4']),
            abilities: x('h3:contains("Abilities") + div.content', ['h4'])
        }]),
        weaknesses: x('h3:contains(" Weaknesses") + div.content', ['h4'])
    })(function(err, obj) {
      console.log( JSON.stringify(obj, null, 2) );
    });
});
