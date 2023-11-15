//this is where your express sever is created and managed

//do not forget to import the necessary modules,


//do not forget to connect to your mongoDb



//do not forget to set up routes to serve out the html file

// Do not forget to handle your form posts for the relevant forms

// Do not forget to handle form gets for the necessary data to display on the user interface.


//Do not forget to catch all the erros that may arise during the process of parsing data from one form to another.

// do not forget to create a port for your application and serving out the appliacation via the port created 
const express = require('express');
const mongoose = require('mongoose');
const BLB = require('./BLB-MAIN');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
const username = 'nathan';
const password = 'NA3108tha..';
const databaseName = 'BLB';

mongoose.connect('mongodb+srv://nathan:NA3108tha..@cluster0.21pluz0.mongodb.net/BLB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Define MongoDB schema
const personSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  fatherName: String,
  motherName: String,
  gender: String,
  bloodGroup: String,
});

const Person = mongoose.model('Person', personSchema);

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/your-html-file.html');
});

// Handle form post for the personal information form
app.post('/personal-info', (req, res) => {
  const personData = req.body;

  // Create a new Person document and save it to the database
  const newPerson = new Person(personData);
  newPerson.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Personal information saved successfully!');
    }
  });
});

// Handle form get for the title search
app.get('/title-search', (req, res) => {
  const titleNumber = req.query.titleNumber;

  // Perform the title search logic here
  // ...

  res.send(`Title search for ${titleNumber}`);
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
