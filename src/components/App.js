import React from 'react';
import JoinGame from './Player/JoinGame';
import QuizForm from './CreateQuiz/QuizForm';
import Quiz from './Quiz/Quiz';
import Lobby from './Lobby/Lobby';
import Start from './Host/Start';
import Question from './Host/Question';
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
        <Route path='/question' element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
