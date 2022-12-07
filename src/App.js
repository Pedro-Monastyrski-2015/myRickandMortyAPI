import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import { useState, useEffect} from "react"
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/about/About'
import Detail from './components/detail/Detail.jsx'
import Form from './components/form/Form'


function App () {
const location= useLocation()
const [characters,setCharacters]=useState([])
const [ access, setAccess]= useState(false)
const username='pedromercado36@hotmail.com';
const password='Piter-1234';
const navigate=useNavigate()

function login (userData){
if(userData.username===username && userData.password=== password){
  setAccess(true)
  navigate('/home')
}else{
  alert('Usuario o contraseña incorrectos')
}}

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

    useEffect(() => {
      !access && navigate('/');
   }, [access]);


  return (
    <div className='App' >
      
      <div>
        {location.pathname !=='/' && <Nav onSearch={onSearch}/>}
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId'  element={<Detail/>}/>
      </Routes>
      </div>
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </section>
    </div>)
}

export default App

      