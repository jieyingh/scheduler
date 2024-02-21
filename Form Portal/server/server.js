const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors())
app.options('*', cors()) // enable CORS for all routes
const submitRoute = require('./routes/submit');



app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server !!!!</h1>' + req.query.a);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('<h1>Hello!</h1>'); 
})


app.use('/submit', submitRoute);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });  


// Example specifying the port and starting the server
const port = process.env.PORT || 3001; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

