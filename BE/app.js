// packages import
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index')
const cors = require('cors');
// set the port.
const PORT = 3000;

// Set up the express app.
const app = express();
app.use(cors());
//
app.use('/v1', routes);

// default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome, you may leave now..',
}));


app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});

module.exports = app;
  