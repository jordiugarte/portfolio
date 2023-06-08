import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Frontend from './components/Frontend.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.tsx'
import AboutMe from './components/AboutMe.tsx'
import Technologies from './components/Technologies.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import Error404 from './components/Error404.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Frontend />,
    children: [
      {
        index: true,
        path: '',
        element: <Home />
      },
      {
        path: 'about-me',
        element: <AboutMe />
      },
      {
        path: 'technologies',
        element: <Technologies />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <Error404 />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
