import  { useState } from 'react';

function App() {
  // Инициализируем состояние счетчика ( Task2) [cite: 92]
  const [count, setCount] = useState(0);
  
  return(
    <div style= {{ textAlign: 'center', marginTop: '50px'}}>
      <h2>{count}</h2>

    
    {/* Кнопки меняют состояние, что вызывает ре-рендер [cite: 91, 93] */}
    <button onClick={ () => setCount(count + 1)}>Increment</button>
    <button onClick={ () => setCount(count - 1)}>Increment</button>
    
    <p>React работает как View Layer, обновляя только текст счетчика.</p>
    </div>
  );
}

export default App;