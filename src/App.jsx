import { Route, Routes } from 'react-router-dom';
import StartGame from './pages/startGame';
import PlayGame from './pages/playGame';
import './App.css'
import Home from './pages/Home';
import { wordContext } from './context/wordContext';
import { useState } from 'react';
function App() {

  const [ wordList , setWordList] = useState([]);
  const [word , setWord] = useState('');

  return (
    <wordContext.Provider value={{wordList , setWordList ,word , setWord}}>
      <Routes>
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </wordContext.Provider>
  );

}

export default App
