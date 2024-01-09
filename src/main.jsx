import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ListUsersProvider } from './components/UsersContext.jsx'
import { ListProductsProvider } from './components/ProductsContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListUsersProvider>
          <ListProductsProvider>
            <App />
          </ListProductsProvider>
        </ListUsersProvider>   
    </BrowserRouter>
  </React.StrictMode>
);

