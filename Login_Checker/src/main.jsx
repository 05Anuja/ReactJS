import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CreateRegister from './CreateRegister'
import UseRegister from './UseRegister'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateRegister>
      <UseRegister />
    </CreateRegister>
  </StrictMode>,
)
