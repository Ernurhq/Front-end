import { useState } from 'react';

// Task 1: Компонент принимает props initialValue и step [cite: 30, 31, 32]
function StepCounter({ initialValue = 0, step = 1 }) {
    // Task 1: Инициализация состояния для истории и кол-ва операций [cite: 33]
    const [count, setCount] = useState(initialValue);

// Task 2: Дополнительные состояния для истории и кол-ва операций [cite: 38, 39, 40]
const [history, setHistory] = useState([]);
const [operationCount, setOperationCount] = useState(0);

const updateCount = (amount) => {
    const nextValue = count + amount;
    setCount(nextValue);
    // Добавляем значение в историю и инкрементируем счетчик операций [cite: 43, 44]
    setHistory([...history, nextValue]);
    setOperationCount(prev => prev + 1);
};

// Task 2: Функция сброса [cite: 49, 53, 54]
const handleReset = () => {
    setCount(initialValue);
    setHistory([])
    setOperationCount(0);
};

return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h3>Current Count: {count}</h3>
        <p>Total Operations: {operationCount}</p>

        {/* Кнопки изменения на величину step [cite: 35]*/}
        <button onClick={() =>  updateCount(step)}>Increment (+{step})</button>
        <button onClick={() =>  updateCount(-step)}>Decrement(-{step}</button>
        <button onClick={handleReset}>Reset</button>

        <div>
            <h4>Last 5 changes:</h4>
            {/* Task 2: Отображение последних 5 значений истории [cite: 48] */}
            <ul>
              {history.slice(-5).map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
        </div>
    </div>
);
}
export default StepCounter;