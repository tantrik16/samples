var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.get('/', function (req, res){
	res.sendfile('./index.html');
});

app.get('/api', function (req, res){
	var ret = {
		'notification' : {
			'title' : 'My New Message',
			'message' : 'This is a new message.',
			'icon' : '/images/icon-192x192.png',
			'tag' : 'Notification'
		}
	}
	res.json(ret);
});

app.listen('8080');