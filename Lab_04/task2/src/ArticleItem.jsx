import ArticleItem from './ArticleItem';

export default function ArticleList({ articles, onRemove }) {
  return (
    <ul>
      {articles.map(art => (
        <ArticleItem key={art.id} article={art} onRemove={onRemove} />
      ))}
    </ul>
  );
}