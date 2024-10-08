import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)