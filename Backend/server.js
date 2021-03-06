var express = require('express'),
  app = express(),
  port = process.env.PORT || 4040,
  mongoose = require('mongoose'),
  Task = require('./app/models/Muntu'),
  bodyParser = require('body-parser');


// New style for setting connection to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/presly",
  { useUnifiedTopology: true, useNewUrlParser: true });


// Other things here!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./app/routes/Services');


routes(app);
app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl +
      ' possibly this is not correct URL address'
  })
})

app.listen(port);
console.log('MongoDB-Backend Server started on port : ' + port);
