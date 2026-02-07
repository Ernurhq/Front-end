export default function AddArticle({ onAdd, title, setTitle, summary, setSummary }) {
  return (
    <div>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)} />
      <button onClick={onAdd}>Add Article</button>
    </div>
  );
}