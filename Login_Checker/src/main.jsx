import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CreateRegister from './CreateRegister'
import UseRegister from './UseRegister'
import UseRegister2 from './UseRegister2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateRegister>
      <UseRegister />
      {/* <UseRegister2 /> */}
    </CreateRegister>
  </StrictMode>,
)
