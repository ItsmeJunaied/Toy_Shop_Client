import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Main from './Layouts/Main';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIN/LogIn';
import Register from './Pages/Register/Register';
import AddToys from './Pages/AddToys/AddToys';
import MyToys from './Pages/MyToys/MyToys';
import AllToys from './Pages/AllToys/AllToys';
import AuthProvider from './Providers/AuthProvider';
import SingleToy from './Pages/SingleToy/SingleToy';
import ViewDetails from './Pages/ViewDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"addtoys",
        element:<AddToys></AddToys>
      },
      {
        path:"mytoys",
        element:<MyToys></MyToys>
      },
      {
        path:"alltoys",
        element:<AllToys></AllToys>,
        loader: ()=> fetch('http://localhost:5000/toy')
      },
      {
        path:"login",
        element:<LogIn></LogIn>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"details",
        element:<ViewDetails></ViewDetails>
      },
      {
        path:"singletoy/:id",
        element:<SingleToy></SingleToy>,
        loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
