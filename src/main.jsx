import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import './index.css'
import ItemRoot from './routes/Itemroot'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from './routes/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:category",
    element: <Root />,
  },
  {
    path: "/item/:id",    
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
