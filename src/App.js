import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import { useState} from "react"
import {Routes, Route} from 'react-router-dom'
import About from './components/about/About'
import Detail from './components/detail/Detail.jsx'
import { Form } from 'react-router-dom'

function App () {
const [characters,setCharacters]=useState([])

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
    }

    const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id))
    }


  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId'  element={<Detail/>}/>
      </Routes>
      </div>
      
    </div>)
}

export default App

      {/* <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div> */}