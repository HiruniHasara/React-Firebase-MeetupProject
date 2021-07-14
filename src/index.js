import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import FavouriteContext, {FavouriteContextProvider} from './store/favourite-context';

ReactDOM.render(
  <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteContextProvider>, 
  document.getElementById('root'),
);

