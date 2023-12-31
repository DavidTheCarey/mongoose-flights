module.exports = {
    newFlight,
    create,
    allFlights,
    show
}

const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

async function show (req, res){
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id })
    res.render('flight/show', { title: 'Flight Details', flight, tickets });
}

async function allFlights (req, res){

    res.render("flight/index", {
        flight: await Flight.find()
    });
}

function newFlight (req, res){
    res.render("flight/new", {
        errorMsg: ""
    });
}

// pause and wait to see if database accepts user info
async function create(req, res) {



    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('index', { errorMsg: err.message });
    }
  }