import { Route, Routes } from 'react-router-dom';
import StartGame from './pages/startGame';
import PlayGame from './pages/playGame';
import './App.css'
function App() {

  return (
    <Routes>
      <Route path='/Start' element={<StartGame />} />
      <Route path='/Play' element={<PlayGame />} />
      <Route path='/' element={<div>Home</div>} />
    </Routes>
  );

}

export default App
