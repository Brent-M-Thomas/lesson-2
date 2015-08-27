var express = require('express');
var request = require ('request');
var cors = require ('cors');
var app = express();

app.use(cors());

app.get('/*', function (req, res) {
  var path = req.originalUrl;

  request('https://developer.forecast.io/forecast/?apiKey=5cfe7655eca22173ee295c21dbc3108a/' + path).pipe(res);
});

app.listen(process.env.PORT || 3000);
