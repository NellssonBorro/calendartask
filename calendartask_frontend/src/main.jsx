import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { ChakraProvider } from '@chakra-ui/react';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {Toaster} from 'react-hot-toast'

 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider  value={defaultSystem}>
      <Toaster position='bottom-right'/>
      <App />
    </ChakraProvider>
  </StrictMode>
)
