'use strict';

var request = require('request');
var xray = require('x-ray');
var x = xray();

const URL = 'http://www.superherodb.com/iron-man/10-85/equipment/';

request(URL, (err, res) => {
    const HTML = res.body;

    x(HTML, {
       equipment: x('h3:contains("Equipment") + div.content', ['h4']),
       armor: x('h3:contains("Armor") + div.content', ['h4']),
       weapons: x('h3:contains("Weapons") + div.content', ['h4'])
    })(function(err, obj) {
      console.log( JSON.stringify(obj, null, 2) );
    });
});
