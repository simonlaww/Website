var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var routes = require('./public/js/routes');

// app.use(express.static(path.join(__dirname, '../client')));

app.use('/', routes);

// app.get('/', function(request, response) {
// 	res.sendFile(__dirname + 'index.html');
// });

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;