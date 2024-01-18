/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {Note} from './components/Note' 

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('use effect');
    setLoading(true)

    setTimeout(() => {
      console.log("ahora dentro!");
      
      //guarda una promise: promesa es un obj q guarda un valor futuro, en alg mom se resolvera
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          console.log('loading API notes');
          setNotes(json)
          setLoading(false)
        })
    },2000);
    
  }, [])


  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('crear nota');
    const noteToAddToState = {
      id: notes.length + 1,
      body: newNote,
      title: newNote
    };
    console.log(noteToAddToState);

    //setNotes(notes.concat(noteToAddToState))
    setNotes(prevNotes => [
      ...prevNotes,
      noteToAddToState
    ]);

    setNewNote("");
  }

  console.log('render');

  //if (notes.length === 0) return 'cargando ...'

  return (
    <div>
      <h1>Notes</h1>
      {
        loading ? 'Cargando...' : ''
      }
      <ol>
        {notes
          .map(note => 
            <Note key={note.id} note={note} />
          )}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Submit note</button>
      </form>
    </div>
  )
}

export default App
