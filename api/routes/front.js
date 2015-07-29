var front = require('express')();

exports.routes = front;

/*
 * GET home page.
 */


front.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});