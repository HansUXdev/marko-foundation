require('marko/node-require').install();
require('marko/express'); //enable res.marko

var express 		= require('express');
var serveStatic     = require('serve-static');
var path            = require('path');
var favicon 		= require('serve-favicon');
var app 			= express();
var port 			= process.env.PORT || 8080;

// Resources for client
app.use('/public', express.static('public'));
app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.ico') ));

var src = './src/pages';
var indexTemplate = require(src+'/index.marko');
var test = require(src+'/page.marko');

var assets = './public/assets';

app.get('/', function(req, res) {
    res.marko(indexTemplate, {
            name: 'Frank',
            count: 30,
		    root: assets,
		    colors: [
		      'red',
		      'blue'
		    ]

        });
});


app.get('/test', function(req, res) {
    res.marko(test, {
            name: 'Frank',
            count: 30,
            colors: [
              'green',
              'yellow'
            ]

        });
});


app.listen(port, function() {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    // if (process.send) {
    //     process.send('online');
    // }
});
