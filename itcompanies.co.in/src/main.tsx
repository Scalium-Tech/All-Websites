import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'

const root = createRoot(document.getElementById('app')!)
root.render(<App />)
