import React from 'react';
import JoinGame from './Player/JoinGame';
import QuizForm from './CreateQuiz/QuizForm';
import Quiz from './Quiz/Quiz';
import Lobby from './Host/Lobby';
import Start from './Host/Start';
import GameBlock from './Host/GameBlock';
import Instructions from './Player/Instructions';
import GetReady from './Player/GetReady';
import PlayBlock from './Player/PlayBlock';
import { Header } from './Global/Header';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<JoinGame />} />
        <Route path='/quizzes' element={<QuizForm />} />
        <Route path='/quizzes/:quizId' element={<Quiz />} />
        <Route path='/lobby' element={<Lobby />} />
        <Route path='/start' element={<Start />} />
        <Route path='gameblock' element={<GameBlock />} />
        <Route path='/instructions' element={<Instructions />} />
        <Route path='/getready' element={<GetReady />} />
        <Route path='/playblock' element={<PlayBlock />} />
      </Routes>
    </div>
  );
}

export default App;
