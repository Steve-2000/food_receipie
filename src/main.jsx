import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import {getallreceipies} from './Home.jsx'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import NavFooter from './Nav+Footer.jsx'
import Eachreceipe from './Eachreceipe.jsx'

import { Children } from 'react'
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavFooter />,
    children: [
      {
        path: '/',
        element: <Home />,
      
      }

      
    ]
  },
 
]);


createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>    </RouterProvider>
    
  
)
