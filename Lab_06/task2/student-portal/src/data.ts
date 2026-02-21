export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Router Basics", instructor: "Dr. Smith", description: "Learn how to build SPAs with navigation." },
  { id: 2, title: "Advanced TypeScript", instructor: "Jane Doe", description: "Deep dive into types and generics." },
  { id: 3, title: "Web Performance", instructor: "John Wilson", description: "Optimizing React rendering." },
];