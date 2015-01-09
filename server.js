var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  _ = require('underscore');

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/.tmp', express.static(__dirname + '/.tmp'));
app.use('/app', express.static(__dirname + '/src/app'));
app.use('/assets', express.static(__dirname + '/src/assets'));
app.use('/components', express.static(__dirname + '/src/components'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/api/check/', function (req, res) {
  var success = false;

  _.each(users, function (user) {
    if (req.body.email === user.email && req.body.password === user.password) {
      success = true;
    }
  });

  res.send(success);
});

app.all('/*', function (req, res, next) {
  res.sendFile('src/index.html', {root: __dirname});
});

app.listen(3000);

console.log("\nServer start on 127.0.0.1:3000\n");

var users = [{
  'id': '1',
  'firstName': 'James',
  'lastName': 'Bond',
  'email': 'root@gmail.com',
  'password': '111111',
  'phone': ''
}, {
  'id': '2',
  'firstName': 'Freddy',
  'lastName': 'Mercury',
  'email': 'star@gmail.com',
  'password': '111111',
  'phone': ''
}];
