import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Importando as rotas

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Login from './routes/Login/index.jsx'
import Sobre from './routes/Sobre/index.jsx'
import Faq from './routes/Faq/index.jsx'
import EsqueceuSenha from './routes/EsqueceuSenha/index.jsx'
import Error from './routes/Error/index.jsx'

//Configurar Rotas
const router = createBrowserRouter ([
  {
     path: '/', 
    element: <App />,
    errorElement: <Error />,
    children:[
      {
      path: '/',
      element: <Home />,
      },

      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/sobre',
        element: <Sobre />,
      },

      {
        path: '/faq',
        element: <Faq />, 
      },

      {
        path: '/esqueceuSenha',
        element: <EsqueceuSenha />,
      },
      {
        path: '/homeLogin',
        element: <HomeLogin />,
      },
      {
        path: '/meuPerfil',
        element: <MeuPerfil />,
      },
      {
        path: '/meusChamados',
        element: <MeusChamados />,
      },
      {
        path: '/abrirChamadoLocal',
        element: <AbrirChamadoLocal />,
      },
      {
        path: '/abrirChamadoFoto',
        element: <AbrirChamadoFoto />,
      },
      {
        path: '/abrirChamadoOcorrido',
        element: <AbrirChamadoOcorrido />,
      },
      {
        path: '/abrirChamadoConfirmacao',
        element: <AbrirChamadoConfirmacao />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
