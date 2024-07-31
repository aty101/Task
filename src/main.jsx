import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Header } from './components/Header.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element:
    <App></App>
    
  },
  {
    path: "new",
    element: <div>
    <Header></Header>
    <h1>new</h1>
  </div>
  }, {
    path: "popular",
    element: <div>
    <Header></Header>
    <h1>popular</h1>
  </div>
  }, {
    path: "trending",
    element: <div>
    <Header></Header>
    <h1>trending</h1>
  </div>
  }, {
    path: "categories",
    element: <div>
    <Header></Header>
    <h1>categories</h1>
  </div>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
