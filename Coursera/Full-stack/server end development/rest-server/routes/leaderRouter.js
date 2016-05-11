/*
Assignment 1 dishRouter
writer: Mengran Zhu
time:05/08/2016
*/

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Leaders = require('../models/leadership');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')


.get(function(req, res, next){
		Leaders.find({}, function(err, leader) {
			if (err) throw err;
			res.json(leader);
		});

})

.post(function(req, res, next){
	Leaders.create(req.body, function(err, leader){
			if (err) throw err;
			console.log('Leader created!');
			var id = leader._id;
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Added the dish with id: ' + id);
	});
})

.delete(function(req, res, next){

		Leaders.remove({}, function(err, resp){
			if (err) throw err;
			res.json(resp);
		});
});

leaderRouter.route('/:id')


.get(function(req, res, next){
		Leaders.findById(req.params.id, function(err, leader){
				if (err) throw err;
				res.json(leader);
		});
})

.put(function(req, res, next){
		Leaders.findByIdAndUpdata(req.params.id, {
			$set: req.body
		}, {
				new: true
		},function(err, leader){
				if (err) throw err;
				res.json(leader);

		});
})

.delete(function(req, res, next){
			Leaders.findByIdAndRemove(req.params.id, function(err, resp){
					if (err) throw err;
					res.json(resp);
			});
});
module.exports = leaderRouter;