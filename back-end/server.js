const express = require('express');
const app = express();
const port = 3001;

const pets = [
  { id: 1, name: 'Leo', dob: '2019-01-15', client_email: 'Leo.owner@email.com' },
  { id: 2, name: 'Knob', dob: '2020-05-20', client_email: 'Knob.owner@email.com' },
  { id: 3, name: 'Blue', dob: '2018-12-10', client_email: 'Blue.owner@email.com' },
  { id: 4, name: 'Chicken', dob: '2017-08-25', client_email: 'Chicken.owner@email.com' },
  { id: 5, name: 'Cobra', dob: '2016-11-30', client_email: 'Cobra.owner@email.com' },
  { id: 6, name: 'Luna', dob: '2021-03-05', client_email: 'Luna.owner@email.com' },
  { id: 7, name: 'Waterface', dob: '2019-09-18', client_email: 'Waterface.owner@email.com' },
  { id: 8, name: 'Velvet', dob: '2020-10-12', client_email: 'Velvet.owner@email.com' },
  { id: 9, name: 'Rosa', dob: '2018-06-22', client_email: 'Rosa.owner@email.com' },
  { id: 10, name: 'Mint', dob: '2017-04-08', client_email: 'Mint.owner@email.com' }
];

app.get('/', (req, res) => {
    res.send('Veterinary App backend!');
  });
  
app.get('/v1/pets', (req, res) => {
  res.json(pets);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
