var api = require('express')();
var users = {
	1: { id : 1, name : 'toto' },
	2: { id : 2, name : 'tata' },
	3: { id : 3, name : 'tutu' },
	4: { id : 4, name : 'titi' }
};

exports.routes = api;

api
.get('/users', function(req, res) {
	res.send(users);
})
.get('/users/:id', function(req, res) {
	/*
	 * User not found
	 */
	if (!users[req.params.id]) {
		res.status(404).send();
		return;
	}
	
	res.send(users[req.params.id]);
})
.post('/users', function(req, res) {
	var id = Object.keys(users).length + 1;
	var user = req.body;
	
	user.id = id;
	users[id] = user;
	
	res.send(user);
});