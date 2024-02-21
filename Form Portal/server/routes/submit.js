// routes/submit.js
const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
 

    res.send(req.body);// this gets executed when user visit http://localhost:3001/submit

});

// export the router module so that server.js file can use it
module.exports = router;