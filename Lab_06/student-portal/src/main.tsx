import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import { courses } from './data';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <div><h1>Welcome to Student Portal</h1><p>Select a section in the menu.</p></div> },
      { path: "about", element: <div><h1>About Us</h1><p>This is a React Router Lab project.</p></div> },
      { path: "courses", element: <Courses /> },
      { 
        path: "courses/:id", 
        element: <CourseDetail />,
        loader: async ({ params }) => {
          const course = courses.find(c => c.id === Number(params.id));
          if (!course) throw new Response("Not Found", { status: 404 });
          return { course };
        }
      },
      { path: "*", element: <h1>404 - Page Not Found</h1> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);