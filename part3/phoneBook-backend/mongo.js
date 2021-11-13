import mongoose from "mongoose";
import Person from "./models/person.js";

const person = new Person({
  name: "Hidaya",
  number: 88,
});

//fetch data
Person.find({}).then((result) => {
  result.forEach((person) => {
    console.log(person);
  });
  mongoose.connection.close();
});
//save data to db
person.save().then((result) => {
  console.log("person saved!");
  mongoose.connection.close();
});
