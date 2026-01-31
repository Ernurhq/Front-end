// 1. Импортируем мой новый компонент 
import StepCounter from "./StepCounter";

function App() {
  return (
    <div style={{ fontFamily: 'Arial , sans-serif', padding: '20px'}}>
      <h1>Lab 3.1: Component Composition</h1>

      {/* 2. Первый экземпляр: с дефолтным или заданными значениями (Task 3.1) */}
      <section>
        <h2>First Counter (Step 1)</h2>
        <StepCounter initialValue={0} step={1} />
      </section>

      <hr />

      {/* 3. Второй экземпляр: работает независимо с другими данными}  (Task 3.1) */}
      <section>
        <h2>Second Counter (Step 5)</h2>
        <StepCounter initialValue={10} step={5} />
      </section>

      {/* 4. Обязательный комментарий по Task 3.3 */}
      {/* Объяснение:
          Props (initialValue, step) - это данные, передаваемые от родителя к ребенку. Они доступны только для чтения[cite: 9].
          State (count, history) - Это внутренние данные компонента, которые могут меняться.[cite: 10].
          Каждый экземпляр StepCounter имеет свой собственный независимый state,
          Даже если они используют один и тот же шаблон кода[cite: 59].
      */}
    </div>
  );
}
export default App;