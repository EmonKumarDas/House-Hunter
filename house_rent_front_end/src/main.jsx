import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './Provider/AuthProvider.jsx'
import { ApiProvider } from './Provider/ApiProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <ApiProvider><App /></ApiProvider></AuthProvider>

  </React.StrictMode>,
)
