var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index');
var calculate = require('./routes/calculate')

app.use(bodyParser.urlencoded({extended: true}));

app.use('/calculate', calculate)
app.use('/', index);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
