import { useState } from 'react';
import ComicCards from './components/ComicCardsComponent.jsx';
import './style/App.css';
import NavBar from "./components/NavBarComponent.jsx";

function App() {

  return (
    <>
      <h1 className='header'>Comic Book Collections</h1>
      <NavBar />
     <ComicCards />
    </>
  )
}

export default App
