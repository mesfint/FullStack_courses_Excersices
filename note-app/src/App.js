import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Note } from './components/Note';
import noteService from './services/notes';
import { Notification } from './components/Notification';
import { Footer } from './components/Footer';

import { Typography, Form, Input, Divider } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import './App.css';

const Container = styled.div({
  height: '25vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px dashed #545454',
});
const Button = styled.button({
  border: '1px solid #c4c4c4',
  paddingTop: '0px',
  marginTop: '5px',
  outline: 'none',
  height: '30px',
  width: '100px',
  paddingBottom: '-10px',
});

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('some error happened...');

  //const {notes} = props;
  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  function handleInputChange(e) {
    setNewNote(e.target.value);
  }
  const toggleImportanceOf = (id) => {
    //const url = `http://localhost:3002/notes/${id}`;
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was  already deleted from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 1000);
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  //Add new notes
  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      /* id: notes.length + 1 */
    };

    noteService.create(noteObject).then((returnedNote) => {
      if (newNote.length > 0) {
        setNotes(notes.concat(returnedNote));
        setNewNote('');
      }
    });
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <>
      <div className="App">
        <h1>Notes</h1>
        <Notification message={errorMessage} />
        <Container>
          <form onSubmit={addNote}>
            <input
              className="input"
              value={newNote}
              onChange={handleInputChange}
              placeholder="Add notes..."
            />
            <Button className="submit">Save note</Button>
          </form>
        </Container>
        <div>
          <Button onClick={() => setShowAll(!showAll)}>
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
          </Button>
          <h3>{`   You have ${notes.length} notes `}</h3>
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

        <div>
          <Divider plain></Divider>
          <a href="https://github.com/mesfint/FullStack_courses_Excersices/tree/master/note-app">
            Source Code
          </a>
        </div>
        <div>
          <Footer />
          Made with ❤️ &nbsp; by MesfinT ©2021 ✌️
        </div>
      </div>
    </>
  );
};

export default App;
