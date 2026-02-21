import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', gap: '15px', padding: '20px 0', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>
      <main style={{ padding: '20px 0', minHeight: '300px' }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: 'center', borderTop: '1px solid #eee', padding: '10px' }}>
        Student Portal 2026
      </footer>
    </div>
  );
}