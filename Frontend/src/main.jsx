import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import './index.css'
import App from './App.jsx'
import {BrowerRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowerRouter>
        <App />
      </BrowerRouter>
    </Provider>
  </StrictMode>,
)
