const express = require('express');
const app = express();
app.use(express.json());

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Dan Abramov',
    number: '045-9087456',
  },
  {
    id: 3,
    name: 'Mary Poppendick',
    number: '39-23-3456666',
  },
];
const person = {
  time: new Date(),
  length: Object.keys(persons).length,
};

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});
app.get('/info', (request, response) => {
  response.send(
    'Phonebook has info for  ' +
      person.length +
      ' people' +
      '<br />' +
      person.time
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
