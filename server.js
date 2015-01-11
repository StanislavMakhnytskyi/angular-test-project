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
  var userId;

  _.each(users, function (user) {
    if (req.body.email === user.email && req.body.password === user.password) {
      userId = user.id;
    }
  });

  res.send(userId);
});

app.get('/api/users/:id', function (req, res) {
  var userId = getId(req.params.id),
    responseUser;

  _.each(users, function (user) {
    if (user.id === userId) {
      responseUser = user;
    }
  });

  res.json(responseUser);
});

app.put('/api/users/:id', function (req, res) {
  var userToReplace,
    editedUser = {
      'id': '',
      'firstName': '',
      'lastName': '',
      'email': '',
      'password': '',
      'phone': ''
    };

  _.each(users, function (user) {
    if (user.id === editedUser.id) {
      userToReplace = users.indexOf(user);
    }
  });

  users[userToReplace] = editedUser;

  res.json(editedUser);
});

app.post('/api/products', function (req, res) {
  var newProduct = {
    'id': products.length,
    'name': req.body.name,
    'price': req.body.price,
    'description': req.body.description
  };

  products.push(newProduct);

  res.json(products);
});

app.get('/api/products/', function (req, res) {
  res.json(products);
});

app.get('/api/products/:id', function (req, res) {
  var productId = getId(req.params.id),
    responseProduct;

  _.each(products, function (product) {
    if (product.id === productId) {
      responseProduct = product;
    }
  });

  res.json(responseProduct);
});

app.put('/api/products/:id', function (req, res) {
  var productToReplace,
    editedProduct = {
      'id': req.body.id,
      'name': req.body.name,
      'price': req.body.price,
      'description': req.body.description
    };

  _.each(products, function (product) {
    if (product.id === editedProduct.id) {
      productToReplace = products.indexOf(product);
    }
  });

  products[productToReplace] = editedProduct;

  res.json(editedProduct);
});

app.delete('/api/products/:id', function (req, res) {
  var productId = getId(req.params.id),
    productToDelete;

  _.each(products, function (product) {
    if (product['id'] === productId) {
      productToDelete = products.indexOf(product);
    }
  });

  products.splice(productToDelete, 1);
});

app.all('/*', function (req, res, next) {
  res.sendFile('src/index.html', {root: __dirname});
});

app.listen(3001);

console.log("\nServer start on 127.0.0.1:3001\n");

function getId (id) {
  return /\d/.exec(id)[0];
}

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

var products = [{
  'id': '1',
  'name': 'AngularJS',
  'price': '1234.21',
  'description': '1HTML enhanced for web apps!'
}, {
  'id': '2',
  'name': 'AngularJS',
  'price': '1234.56',
  'description': '1HTML enhanced for web apps!'
}, {
  'id': '3',
  'name': 'AngularJS',
  'price': '2234.56',
  'description': '2HTML enhanced for web apps!'
}, {
  'id': '4',
  'name': 'AngularJS',
  'price': '3234.56',
  'description': '3HTML enhanced for web apps!'
}, {
  'id': '5',
  'name': 'AngularJS',
  'price': '4234.56',
  'description': '4HTML enhanced for web apps!'
}, {
  'id': '6',
  'name': 'AngularJS',
  'price': '5234.56',
  'description': '5HTML enhanced for web apps!'
}, {
  'id': '7',
  'name': 'AngularJS',
  'price': '6234.56',
  'description': '6HTML enhanced for web apps!'
}, {
  'id': '8',
  'name': 'AngularJS',
  'price': '7234.56',
  'description': '7HTML enhanced for web apps!'
}, {
  'id': '9',
  'name': 'AngularJS',
  'price': '8234.56',
  'description': '8HTML enhanced for web apps!'
}, {
  'id': '10',
  'name': 'AngularJS',
  'price': '9234.56',
  'description': '9HTML enhanced for web apps!'
}, {
  'id': '11',
  'name': 'AngularJS',
  'price': '1234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '12',
  'name': 'AngularJS',
  'price': '2234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '13',
  'name': 'AngularJS',
  'price': '3234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '14',
  'name': 'AngularJS',
  'price': '4234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '15',
  'name': 'AngularJS',
  'price': '5234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '16',
  'name': 'AngularJS',
  'price': '6234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '17',
  'name': 'AngularJS',
  'price': '6234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '18',
  'name': 'AngularJS',
  'price': '6234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '19',
  'name': 'AngularJS',
  'price': '6234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '20',
  'name': 'AngularJS',
  'price': '6234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '21',
  'name': 'AngularJS',
  'price': '6234.56',
  'description': 'HTML enhanced for web apps!'
}, {
  'id': '22',
  'name': 'AngularJS',
  'price': '6234.56',
  'description': 'HTML enhanced for web apps!'
}];
