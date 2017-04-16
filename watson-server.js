var express = require('express');
var path = require('path');
var app = express();
var watson = require('./watson2.js');

app.use(express.static(path.resolve(__dirname, 'watson')));

app.get('/getmood', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  // write function to handle watson call
  watson(res, req);
});

app.listen(process.env.PORT || 8000, function() {
	console.log("App is running on port ");
});