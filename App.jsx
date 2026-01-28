import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './component/layout';
import Landingpage from './component/Landingpage';
function App() {

const router=createBrowserRouter([
{
path:"/", 
element:<Layout/>,
children:[
{index: true ,element:<Landingpage/>},

],

}

]);




  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App
