import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pulpe from './pulpe'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pulpe />
  </StrictMode>,
)
