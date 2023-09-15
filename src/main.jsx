import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MultiButton } from './components/buttons.jsx'
import BgHdline from './components/BgHdline.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BgHdline/>
    <MultiButton/>
  </React.StrictMode>,
)
