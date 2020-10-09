import React from 'react';
import {render } from 'react-dom';
import 'normalize.css'; 
import {GlobalStyles} from './global-style'
import App from './app';

render(<>
    <GlobalStyles />
     <App /> </>,
  document.getElementById('root')
);

