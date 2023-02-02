import React from 'react';
import QuizForm from './CreateQuiz/QuizForm';
import Quiz from './Quiz/Quiz';
import NicknameForm from './Player/NicknameForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/quizzes' element={<QuizForm />} />
        <Route path='/quizzes/:quizId' element={<Quiz />} />
        <Route path='/pin' element={<NicknameForm />} />
      </Routes>
    </div>
  );
}

export default App;
