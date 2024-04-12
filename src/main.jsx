import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './assets/scss/index.scss'
import AboutPage from './assets/pages/AboutPage.jsx'
import ServicesPage from './assets/pages/ServicesPage.jsx'
import ContactPage from './assets/pages/ContactPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/about',
    element: <AboutPage></AboutPage>,
  },
  {
    path: '/servizi',
    element: <ServicesPage></ServicesPage>,
  },
  {
    path: '/contatti',
    element: <ContactPage></ContactPage>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
