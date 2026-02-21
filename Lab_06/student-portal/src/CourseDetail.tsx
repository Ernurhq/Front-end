import { useParams, useLoaderData, Link } from "react-router-dom";
import type { Course } from "./data";

export default function CourseDetail() {
  const { id } = useParams();
  const { course } = useLoaderData() as { course: Course };

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <p><small>ID курса в URL: {id}</small></p>
      <Link to="/courses">← Back to List</Link>
    </div>
  );
}