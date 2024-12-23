import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SocialMediaButtons from './components/SocialMediaButtons.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SocialMediaButtons/>
  </StrictMode>,
)
