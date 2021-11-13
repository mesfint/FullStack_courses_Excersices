import React from "react";
import { List, Avatar } from "antd";
import styled from "styled-components";

const Container = styled.section`
  padding: 0.3rem;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1em;
  margin-right: 0.6rem;
  text-align: left;
  color: #000066; ;
`;
const PhoneNumber = styled.h2`
  font-size: 1em;
  margin-right: 0.6rem;
  text-align: left;
  color: #000066;
`;

//List of Persons
export const Persons = ({ persons, search, handleDelete }) => {
  //console.log(persons);
  //filter person from the list of persons based on the value={search}

  const filteredPerson = persons.filter((person) => {
    //indexOf->searching the index of string/character
    return person.name.toLowerCase().indexOf(search) !== -1;
  });
  const personArray = filteredPerson.map((person, index) => (
    <Container>
      <Title key={index}>{person.name}</Title>
      <PhoneNumber>{person.number}</PhoneNumber>
      <button onClick={() => handleDelete(person.id)}>Delete</button>
    </Container>
  ));

  return <div className="list">{personArray}</div>;
};
