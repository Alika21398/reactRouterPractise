import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import GitHub, { githubLoader } from './Components/GitHub.jsx'
import User from './Components/User.jsx'
import Details from './Components/Details.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true, 
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        loader: githubLoader,
        path:"gitHub",
        element: <GitHub/>,
        
      },
      {
        path: "user",
        element: <User/>
      },
      {
        path: "/user/details/:userid",
        element: <Details/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  
  </StrictMode>,
)
