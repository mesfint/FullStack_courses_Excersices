import React from 'react';


const Persons = ({persons,search}) =>{

    //console.log(persons);
    //filter person from the list of persons based on the value={search}
  
  const filteredPerson = persons.filter((person) =>{
    //indexOf->searching the index of string/character
      return person.name.toLowerCase().indexOf(search) !== -1;
    }
  );
  const personArray = filteredPerson.map((i, index) => (
    <li key={index}>
      {i.name}{' | '} {i.number}
    </li>
  ));
//console.log(personArray);

    return(
        <div className="list">
        {personArray}
      </div>

    )

    

}




export default Persons;