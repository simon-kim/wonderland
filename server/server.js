'use strict';

var express     = require('express');
var port        = process.env.PORT || 3000;
var app         = express();

app.use(express.static(__dirname + '../build'));

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
