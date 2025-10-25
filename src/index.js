import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './page/Error';
import HomePage from './page/HomePage';
import Login from './page/Login';
import Plp from './page/Plp';
import Pdp from './page/Pdp';
import AdminPage from './page/AdminPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/plp",
        element:<Plp/>
      },
      {
        path:"/pdp/:productID",
        element:<Pdp/>,
      },{
        path:"/admin/:adminID",
        element:<AdminPage/>,
      }

    ]
  }
])
root.render(
  <React.StrictMode>
   <RouterProvider router={myRouter} />
  </React.StrictMode>
);

