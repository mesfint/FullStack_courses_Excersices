import React from 'react';

export const Note = ({ note, toggleImportanceOf }) => {
  const label = note.important ? 'make not important' : 'make important';

  /*   const handleDelete = (id) => {
    deleteNote(note.id);
  }; */
  return (
    <>
      <React.StrictMode>
        <React.Fragment>
          <li className="note">
            {note.content}
            <button onClick={toggleImportanceOf}>{label}</button>
          </li>
        </React.Fragment>
      </React.StrictMode>
      {/*    <DeleteFilled
          onClick={handleDelete}
          style={{ fontSize: '1.3rem', color: '#08c' }}
        /> */}
    </>
  );
};
