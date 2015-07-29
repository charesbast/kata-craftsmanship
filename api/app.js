
/**
 * Module dependencies.
 */

var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	errorHandler = require('errorhandler'),
	favicon = require('serve-favicon'),
	http = require('http'),
	path = require('path');


/**
 * Settings
 */
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'hjs');
//app.use(favicon());
//app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(errorHandler());
}

/**
 * Routes
 */
var	front = require('./routes/front'), 
	api = require('./routes/api');

app
.use('/front', front.routes)
.use('/api', api.routes);

app.get('/', function(req, res) {
	res.send('Aawii');
});

/**
 * Start server
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
