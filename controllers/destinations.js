module.exports = {
    create
}

const Flight = require("../models/flight");

async function create (req, res){

    const flight = await Flight.findById(req.params.id);

    flight.destinations.push(req.body)
    try {
        // Save any changes made to the movie doc
        await flight.save();
      } catch (err) {
        console.log(err);
      }
      // Step 5:  Respond to the Request (redirect if data has been changed)
      res.redirect(`/flights/${flight._id}`);
}
