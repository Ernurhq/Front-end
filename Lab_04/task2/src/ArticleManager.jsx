import { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

export default function ArticleManager() {
  const [articles, setArticles] = useState([{ id: 1, title: 'React 19', summary: 'New features...' }]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const addArt = () => {
    setArticles([...articles, { id: Date.now(), title, summary }]);
    setTitle(''); setSummary('');
  };

  const removeArt = (id) => setArticles(articles.filter(a => a.id !== id));

  return (
    <div>
      <h1>Article Manager</h1>
      <AddArticle onAdd={addArt} title={title} setTitle={setTitle} summary={summary} setSummary={setSummary} />
      <ArticleList articles={articles} onRemove={removeArt} />
    </div>
  );
}