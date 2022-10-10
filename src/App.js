import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shope from './components/Shope/Shope';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productAndCartLoader } from './loaders/productAndCartLoader';

function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[{
      path:'/',
      // loader:async()=>fetch('products.json'),
      loader:productAndCartLoader,
      element:<Shope></Shope>
    },
      {
      path:'/orders',
      loader:productAndCartLoader,
      element:<Orders></Orders>
    },
    {
      path:'/inventory',
      element:<Inventory></Inventory>
    }
  
  ]
    
  },

])
  return (
    <div>
     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
