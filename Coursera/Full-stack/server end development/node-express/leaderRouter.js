/*
Assignment 1 dishRouter
writer: Mengran Zhu
time:05/08/2016
*/

var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req, res, next){
		res.writeHead(200, {'Content-type':' text/plain'});
		next();
})

.get(function(req, res, next){
		res.end('Will send all leadership to you !');

})

.post(function(req, res, next){
		res.end('Will add all the leadership ' + req.body.name + 'with the details: ' + req.body.description);
})

.delete(function(req, res, next){

		res.end('Deleting all the leadership');
});

leaderRouter.route('/:id')
.all(function(req, res, next){
		res.writeHead(200, {'Content-Type':' text/plain'});
		next();
})

.get(function(req, res, next){
		res.end('Will send the details of the leader: ' + req.params.id + ' to you !');
})

.put(function(req, res, next){
		res.write('Updating the leader :' + req.params.id +'\n');
		res.end('Will update the leader: ' + req.body.name + ' with the details: ' + req.body.description);
})

.delete(function(req, res, next){
			res.end('Deleting the leader: ' + req.params.id);
});
module.exports = leaderRouter;