var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var PORT = process.env.PORT || 8080;


var waitList = require('./waitinglist-data.js');
var tableList = require('./table-data.js');


app.get('/tables', function(req, res){

	res.render('tables', {
		wait : waitList,
		tables: tableList
	});


});



// Starts the server 
// =============================================================
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});