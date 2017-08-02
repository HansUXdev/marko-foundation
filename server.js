require('marko/node-require').install();
require('marko/express'); //enable res.marko

var express = require('express');
var serveStatic = require('serve-static');

var app = express();
var port = 8080;




var assetRoot= '/public/assets/';
var src = './src/pages';
var indexTemplate = require(src+'/index.marko');

// Resources for client
// app.use(assetRoot, serveStatic(__dirname + assetRoot));
// Serve static content for the app from the "public" directory in the application directory.
app.use('/public', express.static('public'))


app.get('/', function(req, res) {
    res.marko(indexTemplate, {
    		root: assetRoot,
            name: 'Frank',
            count: 30,
            colors: ['red', 'green', 'blue']
        });
});

app.listen(port, function() {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    if (process.send) {
        process.send('online');
    }
});
