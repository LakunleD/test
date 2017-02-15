var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var News = require('../models/news');

var newsRouter = express.Router();
newsRouter.use(bodyParser.json());

newsRouter.route('/')
    .get(function (req, res, next) {
        News.find({}, function (err, news) {
            if (err) throw err;
            res.json(news)
        });
    })
    .post(function (req, res, next) {
        News.create(req.body, function (err, news) {
            if (err) throw err;
            console.log('News created!');
            var id = news._id;

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Added the news with id: ' + id);
        });
    });

module.exports = newsRouter;