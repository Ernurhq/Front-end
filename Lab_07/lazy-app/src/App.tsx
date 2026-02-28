import { useState, useEffect } from 'react'
import './App.css'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('final_todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('final_todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <header>
        <h1>Task Master</h1>
        <div className="filter-buttons">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Все</button>
          <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>В работе</button>
          <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Готово</button>
        </div>
      </header>
      
      <div className="input-section">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавить задачу..."
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button className="add-btn" onClick={addTodo}>+</button>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => setTodos(todos.map(t => t.id === todo.id ? {...t, completed: !t.completed} : t))} 
              />
              <span className="checkmark"></span>
            </label>
            <span className="todo-text">{todo.text}</span>
            <button className="delete-btn" onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>✕</button>
          </div>
        ))}
      </div>

      {todos.length > 0 && (
        <div className="footer-actions">
          <span>Осталось: {todos.filter(t => !t.completed).length}</span>
          <button className="clear-link" onClick={() => setTodos([])}>Удалить всё</button>
        </div>
      )}
    </div>
  )
}

export default App