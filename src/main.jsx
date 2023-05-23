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
import UpdateToy from './Pages/UpdateToy/UpdateToy';
import ReactTab from './Pages/Home/ReactTab/ReactTab';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        path:"/blog",
        element:<Blogs></Blogs>
      },
      {
        path:"addtoys",
        element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path:"mytoys",
        element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path:"alltoys",
        element:<AllToys></AllToys>,
        loader: ()=> fetch('https://toy-hero-server-ten.vercel.app/toy')
      },
      {
        path:"",
        element:<ReactTab></ReactTab>,
        loader: ()=> fetch('https://toy-hero-server-ten.vercel.app/toy')
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
        path:"update/:id",
        element:<UpdateToy></UpdateToy>,
        loader:({params})=>fetch(`https://toy-hero-server-ten.vercel.app/toy/${params.id}`)
      },
      {
        path:"singletoy/:id",
        element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-hero-server-ten.vercel.app/toy/${params.id}`)
      },
    ]
  },
  {
    path:'*',
    element:<NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
