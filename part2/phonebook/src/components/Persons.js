import React from 'react';
import { List, Avatar } from 'antd';


//List of Persons
export const Persons = ({ persons, search }) => {
  //console.log(persons);
  //filter person from the list of persons based on the value={search}

  const filteredPerson = persons.filter((person) => {
    //indexOf->searching the index of string/character
    return person.name.toLowerCase().indexOf(search) !== -1;
  });
  const personArray = filteredPerson.map((search, index) => (
  /*   <List
    key={index}
    itemLayout="horizontal"
    dataSource={persons}
    size="large"
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{search.name}</a>}
          description={search.number}
          style={{width:400}}
        />
      </List.Item>
    )}
  /> */


    <li key={index}>
      {search.name}
      {' | '} {search.number}
    </li>
  ));
  //console.log(personArray);

  return <div className="list">{personArray}</div>;



};
