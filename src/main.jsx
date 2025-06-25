import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProviderDarkMore from "./Context/ContextProvider";


createRoot(document.getElementById('root')).render(
<StrictMode>
   <ContextProviderDarkMore>
        <App />
   </ContextProviderDarkMore>
  

         
</StrictMode>
 
)
