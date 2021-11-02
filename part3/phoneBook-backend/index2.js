import express, { request } from "express";

const app = express();

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

//router all
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

//app
app.get("/api/persons", (req, res) => {
  const result = `Phonebook has info for ${persons.length} people`;
  res.text(result);
});

//Respond a single person

app.get("/api/persons:id", (req, res) => {
  if (req.params.id) {
    res.json(result);
  }
  res.status(400).send("No contact found");
});

//app post
const getNewId = () => {
  return Math.round(Math.random() * 10000000);
};
//post new
app.post("/api/persons", (req, res) => {
  const body = request.body;

  const person = {
    id: getNewId(),
    name: body.name,
    number: body.number,
  };
  const existedName = persons.some((person) => person.name === body.name);

  if (existedName) {
    return res.status(400).json({ error: "name should be unique" });
  } else if (!body.name) {
    res.status(400);
  } else if (body.number) {
    app.json({ error: "number is already existed" });
  } else {
    persons = [...persons, person];
    res.json(person);
  }
});
