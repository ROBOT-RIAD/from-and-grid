import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// All route import 
import Root from './Components/Root/Root.jsx';
import Forms from './Components/Form/Form.jsx';
import Home from './Components/Home/Home.jsx';

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
         path:"/form",
         element: <Forms></Forms>
      },
      {
         path:"/",
         element: <Home></Home>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
