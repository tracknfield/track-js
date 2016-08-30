var express = require('express');
var app = express();
var Pool = require('pg').Pool;

var pool = new Pool({
	user: 'arzynik',
	database: 'test',
	host: 'localhost',
	max: 20
});

pool.connect(function (err) {
	if (err) throw err;
	console.log('connected to db');
});

app.get('/', function (req, res) {
	pool.query('insert into track (data) values ($1)', [JSON.stringify(req.query)], function (err, result) {
		if (err) throw err;
		res.end();
	});
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});