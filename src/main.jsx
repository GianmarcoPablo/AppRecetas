import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//? React Router
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
//? Components
import Layout from './components/Layout'
//? Pages
import Recetas,{loader as recetasLoader} from './pages/Recetas'
import MejoresRecetas from './pages/MejoresRecetas'
import TodasLasRecetas from './pages/TodasLasRecetas'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
        {
            index: true,
            element: <Recetas/>,
            loader: recetasLoader
        },
        {
            path: '/todas/recetas',
            element: <TodasLasRecetas/>
        },
        {
            path: '/mejores/recetas',
            element: <MejoresRecetas/>
        }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
