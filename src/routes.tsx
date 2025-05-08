import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '/', element: <Navigate to="/about" /> },
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
])

