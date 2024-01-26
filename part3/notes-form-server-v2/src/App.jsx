/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {Note} from './components/Note' 
import noteService from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  const hook = () => {
    console.log('effect');

    const eventHandler = initialNotes => {
      console.log('promise fulfilled');
      setNotes(initialNotes);
    }

    noteService
      .getAll()
      .then(eventHandler)
  }

  useEffect(hook, [])
  console.log('render',notes.length,'notes');


  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  /*
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('crear nota');
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddToState);

    //setNotes(notes.concat(noteToAddToState))
    setNotes(prevNotes => [
      ...prevNotes,
      noteToAddToState
    ]);

    setNewNote("");
  }
  */

  const addNote = event => {
    event.preventDefault();

    console.log("addNote",event);

    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`);

    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `the note "${note.content}" was already deleted from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);

        setNotes(notes.filter(n => n.id !== id))
      })
  }


  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <ol>
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true 
          })
          .map(note => 
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
          )}
      </ol>
      <form onSubmit={addNote}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Submit note</button>
      </form>
      <Footer />
    </div>
  )
}

export default App
