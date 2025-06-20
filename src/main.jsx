// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import {getallreceipies} from './Home.jsx'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import NavFooter from './Nav+Footer.jsx'
import Addreceipie from './Addreceipie.jsx'

// import { Children } from 'react'
import Allreceipies from './Allreceipies.jsx'
import Eachreceipe from './Eachreceipe.jsx'
import Myrecepies from './Myrecepies.jsx'
import Favorites from './Favorites.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavFooter />,
    children: [
      {
        path: '/',
        element: <Home />,
      
      },
      {path:"/receipies",
        element: <Myrecepies />
      },
      {path:"/favourites",
        element:<Favorites/>
      },{
        path: '/addreceipie',
        element:<Addreceipie />,

      },{
        path:"receipie/:id",
        element:<Eachreceipe/>
      },
     
      
    ]
  },
 
]);


createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>    </RouterProvider>
    
  
)
