import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Note } from './components/Note';
import noteService from './services/notes';

import { Typography, Form, Input } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import './App.css';

const { Title } = Typography;

const Container = styled.div({
  height: '25vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px dashed #545454',
});
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  //const {notes} = props;
  useEffect(() => {
    noteService.getAll().then((res) => {
      setNotes(res.data);
    });
  }, []);
  console.log('render', notes.length, 'notes');

  const handleSubmit = () => {
    addNote();
  };

  //Add new notes
  const addNote = () => {
    //e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    //setNotes(notes.concat(noteObject));
    /*    setNotes([noteObject, ...notes]); //New note goes to top
    console.log('notes =>', notes);
    setNewNote(''); */

    //Sending Data to the Server

    axios.post(' http://localhost:3002/notes', noteObject).then((res) => {
      setNotes([noteObject, ...notes]); //New note goes to top
      console.log('notes =>', notes);
      setNewNote('');
    });
  };
  //Delete notes
  /*   const deleteNote = (id) => {
    const removedArr = [...notes].filter((note) => note.id !== id);
    console.log(removedArr);
    setNotes(removedArr);
  }; */

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  const toggleImportanceOf = (id) => {
    const url = ` http://localhost:3002/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    axios.put(url, changedNote).then((res) => {
      setNotes(notes.map((note) => (note.id !== id ? note : res.data)));
    });
  };

  return (
    <>
      <div className="App">
        <Title>Notes</Title>
        <Container>
          <Form>
            <Input
              className="input"
              value={newNote}
              onInput={handleNoteChange}
              placeholder="Add notes..."
            />
            <button className="submit" onClick={handleSubmit}>
              Save note
            </button>
          </Form>
        </Container>
        <div>
          <button
            style={{
              border: '1px solid #c4c4c4',
              paddingTop: '0px',
              marginTop: '5px',
              outline: 'none',
              height: '30px',
              width: '100px',
              paddingBottom: '-10px',
            }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <p
                style={{
                  fontSize: '1rem',
                  color: '#08c',
                }}
              >
                important
              </p>
            ) : (
              <p style={{ fontSize: '1rem', color: '#08c' }}>all</p>
            )}
          </button>
          <h3>{`   You have ${[...notes].length} notes `}</h3>
        </div>
        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportanceOf={() => toggleImportanceOf(note.id)}

              /*  deleteNote={deleteNote} */
              /*    date={note.date} */
              /*  id={note.id} */
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
