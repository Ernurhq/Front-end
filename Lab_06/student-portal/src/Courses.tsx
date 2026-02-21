import { useSearchParams, Link } from "react-router-dom";
import type { Course } from "./data"; 
import { courses } from "./data";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") || "asc";

  const sorted = [...courses].sort((a: Course, b: Course) => 
    sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );

  return (
    <div>
      <h2>Available Courses</h2>
      <button onClick={() => setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" })}>
        Sort: {sortOrder.toUpperCase()}
      </button>
      <ul>
        {sorted.map(c => (
          <li key={c.id} style={{ margin: '10px 0' }}>
            <Link to={`/courses/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}