import ArticleManager from './ArticleManager'; // Импорт главного менеджера

function App() {
  return (
    <div className="App">
      <h1>Лабораторная 4.2: Менеджер статей</h1>
      {/* Основной компонент, который содержит логику списка */}
      <ArticleManager />
    </div>
  );
}

export default App;