import React from 'react';
import QuizForm from './CreateQuiz/QuizForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='quizzes' element={<QuizForm />} />
      </Routes>
    </div>
  );
}

export default App;
