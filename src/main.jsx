import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "./style.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/auth/SignUp.jsx'
import SignIn from './pages/auth/SignIn.jsx'
import Products from './pages/Products.jsx'
import Contact from "./pages/Contact.jsx"
import Home from './pages/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
