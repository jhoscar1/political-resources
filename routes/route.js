var express = require('express');
var data = require('../data.json');

exports.home = function(req, res) {
  res.render('home', {engagement: data.engagement});
}

/*exports.engagement = function(req, res) {
  res.render('')
}*/

exports.allTheRest = function(req, res) {
  res.send('Nothing to see here!');
}
