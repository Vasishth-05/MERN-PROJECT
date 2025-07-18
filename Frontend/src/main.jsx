import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'
import {BrowerRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <BrowerRouter>
        <App />
      </BrowerRouter>
    </ChakraProvider>
  </StrictMode>,
)
