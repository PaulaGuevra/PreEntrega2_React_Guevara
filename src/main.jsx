import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import './index.css';
import ItemRoot from './routes/Itemroot';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import CartRoot from './routes/CartRoot';
import Form from "./components/CheckoutForm/Form"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:categoryId",
    element: <Root />,
  },
  {
    path: "/item/:id",    
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <CartRoot />,
  },
  {
    path: "/checkout", 
    element: <Form />,
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
