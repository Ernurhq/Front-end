import { useState } from 'react';

export default function ArticleItem({ article, onRemove }) {
  const [isOpened, setIsOpened] = useState(false); // Task 2: локальное состояние

  return (
    <li>
      <strong onClick={() => setIsOpened(!isOpened)} style={{cursor:'pointer'}}>
        {article.title} (нажми, чтобы открыть)
      </strong>
      <button onClick={() => onRemove(article.id)}>Удалить</button>
      {isOpened && <p>{article.summary}</p>}
    </li>
  );
}