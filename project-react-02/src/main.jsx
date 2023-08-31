import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// BLOCO DE NOTAS

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './routes/home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Error from './routes/Error/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    erroElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },

      {
        path:"/produtos",
        element:<Produtos/>
      },

      {
        path:"/produtos/editar/:id",
        element:<EditarProdutos/>
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
