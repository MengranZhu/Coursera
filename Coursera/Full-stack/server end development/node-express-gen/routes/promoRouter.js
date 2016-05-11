/*
Assignment 1 promoRouter.js
writer: Mengran Zhu
time:05/08/2016
*/


var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req, res, next){
		res.writeHead(200, {'Content-type':' text/plain'});
		next();
})

.get(function(req, res, next){

		res.end('Will send all promotions to you!');
})

.post(function(req, res, next){

		res.end('Will add the promotion :' + req.body.name + 'with the details :' + req.body.description);
})

.delete(function(req, res, next){

		res.end('Deleting all promotions!');
});

promoRouter.route('/:promoId')
.all(function(req, res, next){
		res.writeHead(200, {'Content-Type':'text/plain'});
		next();
})

.get(function(req, res, next){
		res.end('Will send the details of the promotion: ' + req.params.promoId + ' to you!');
})

.put(function(req, res, next){
		res.write('Updating the promotion: ' + req.params.promoId + '\n');
		res.end('Will update the promotion: ' + req.body.name + ' With the details :' + req.body.description);
})

.delete(function(req, res, next){

			res.end('Deleting the promotion: ' + req.params.promoId);
});
module.exports = promoRouter;