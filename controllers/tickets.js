const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newTicket,
    create
}

async function newTicket (req, res){

    let flightId = req.params.id;

    res.render("flight/ticket", {fId: flightId});
}

async function create (req, res){
    
    req.body.flight = req.params.id;

    try {
        await Ticket.create(req.body);
      } catch (err) {
        console.log(err);
      }
    res.redirect(`/flights/${req.body.flight}`);
}