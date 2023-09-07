var express = require('express');
var router = express.Router();
const flightCtrl = require("../controllers/flights.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/flights', flightCtrl.allFlights);
router.get("/flights/new", flightCtrl.newFlight);
router.get("/flights/:id", flightCtrl.show);
router.post("/flights", flightCtrl.create);

module.exports = router;
