import React, { useState } from 'react';
import { Note } from './components/Note';
import styled from 'styled-components';
import { Typography, Form, Input } from 'antd';
import './App.css';

const { Title } = Typography;

const Container = styled.div({
  height: '25vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px dashed #545454',
});
function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  //const {notes} = props;

  const handleSubmit = () => {
    addNote();
  };

  const addNote = () => {
    //e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    //setNotes(notes.concat(noteObject));
    setNotes([noteObject, ...notes]); //New note goes to top
    console.log('notes =>', notes);
    setNewNote('');
  };
  //Delete notes
  const deleteNote = (id) => {
    const removedArr = [...notes].filter((note) => note.id !== id);
    console.log(removedArr);
    setNotes(removedArr);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
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
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              notes={notes}
              deleteNote={deleteNote}
              date={note.date}
              id={note.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
