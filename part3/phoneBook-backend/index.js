const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());

morgan.token('body', (req) => JSON.stringify(req.body));

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);
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
//get single phonebook entry

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});
//Delete single entry
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

//Post entry
//Generate Random Id
const randomId = () => {
  return Math.round(Math.random() * 10000000);
};

app.post('/api/persons', (request, response) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
    id: randomId(),
  };

  const existedName = persons.some((person) => person.name === body.name);

  if (!body.name) {
    return response.status(400).json({
      error: 'name is missing',
    });
  }
  if (!body.number) {
    return response.status(400).json({
      error: 'number is missing',
    });
  }

  if (existedName) {
    return response.status(400).json({
      error: 'name must be unique',
    });
  }
  persons = [...persons, person];
  response.json(person);
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

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
