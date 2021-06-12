import '@fontsource/poppins/700.css'
import '@fontsource/poppins/400.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme/font'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


/* mongodb+srv://bathalaph:<password>@cluster0.ytjez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority */