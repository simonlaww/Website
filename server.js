var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

var routes = require('./public/js/index.js');

app.use('/', routes);

 // view engine setup
app.set('views', './public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;