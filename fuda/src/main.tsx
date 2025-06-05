import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from '../src/page/landing'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
)
