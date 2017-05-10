const api = require('express')();
const {answerQuestion} = require("../services/questionService");

exports.routes = api;

api
  .get('/', function(req, res) {
    res.send(200, answerQuestion(req.query.q));
  });