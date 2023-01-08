import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayOut from './components/MainLayOut/MainLayOut.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import "../src/App.css"




const routers = createBrowserRouter([
  {
    path:"/",element:<MainLayOut/>,children:[
      {index:true,element:<Home/>},
      {path:"Portfolio",element:<Portfolio/>},
      {path:"About",element:<About/> },
      {path:"Contact",element:<Contact/>}
    ]
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

