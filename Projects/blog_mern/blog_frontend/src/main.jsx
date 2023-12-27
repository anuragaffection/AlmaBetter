import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthState from './context/AuthState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthState>
      <Router>
        <App />
      </Router>
    </AuthState>
  </React.StrictMode>,
)
