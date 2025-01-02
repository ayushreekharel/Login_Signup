import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Signpage from './App.jsx'
import Login from './login.jsx'
import Home from './home.jsx'
import Route_path from './routes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Route_path />
  </StrictMode>,
)
