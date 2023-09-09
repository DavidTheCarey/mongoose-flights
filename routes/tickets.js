var express = require('express');
var router = express.Router();
const ticketsCtrl = require("../controllers/tickets.js");

router.get("/:id/new", ticketsCtrl.new);
router.post("/:id/tickets",ticketsCtrl.create);


module.exports = router;