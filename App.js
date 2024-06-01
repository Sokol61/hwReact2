// Файл App.js
import React from 'react';
import './App.css';
import CommentsList from './CommentsList'; // Импортируем компонент CommentsList

function App() {
  return (
    <div className="App">
      <h1>Список комментариев</h1>
      <CommentsList /> {/* Добавляем компонент CommentsList в разметку */}
    </div>
  );
}

export default App;
