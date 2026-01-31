import { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lab 3.2: Data Fetching with useEffect</h1>
      
      <div>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(Math.floor(Math.random() * 10) + 1)}>
          Random User
        </button>
      </div>

      <UserProfile userId={userId} />

      {/* Task 3: Комментарий про зависимости [cite: 122, 134] */}
      {/* userId добавлен в массив зависимостей useEffect, чтобы при каждом 
          изменении этого пропса React заново запускал функцию загрузки данных.
          AbortController предотвращает обновление стейта, если компонент размонтирован.
      */}
    </div>
  );
}

export default App;