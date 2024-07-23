import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import About from './pages/aboutPage';
import Projects from './pages/projectPage';
import Resume from './pages/resumePage';
import Contact from './pages/contactPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />, 
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  }
])







ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
