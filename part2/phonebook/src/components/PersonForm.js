import React from 'react'

export default function PersonForm({handleInputName,handleInputNumber,handleSubmit,newName,newNumber}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
        name:
        <input
          className="inputName"
          type="text"
          value={newName}
          onChange={handleInputName}
        />
        <br />
        number:
        <input
          className="inputNumber"
          type="text"
          value={newNumber}
          onChange={handleInputNumber}
        />
        <br />
        <button type="submit" className="add">
          Add
        </button>
      </form>


        </div>
    )
}
