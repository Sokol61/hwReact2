import React, { useState } from 'react';

// Компонент CommentsList, который отображает список комментариев
const CommentsList = () => {
  // Инициализируем состояние списка комментариев
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  // Обработчик нажатия на кнопку удаления комментария
  const handleDelete = (id) => {
    // Фильтруем список комментариев, удаляя комментарий с заданным id
    const newComments = comments.filter((comment) => comment.id !== id);
    // Обновляем состояние списка комментариев
    setComments(newComments);
  };

  // Рендерим список комментариев
  return (
    <div>
      {comments.map((comment) => (
        // Для каждого комментария создаем отдельный блок
        <div key={comment.id}>
          <p>{comment.text}</p>
          {/* Кнопка для удаления комментария, при нажатии на которую вызывается обработчик handleDelete */}
          <button onClick={() => handleDelete(comment.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
