import './App.css';
import React from 'react';
import {BrowserRouter, Router} from "react-router-dom"

import { Provider as StoreProvider } from "react-redux";
import store from "./redux/index";

import Routes from './components/Routes';

function App() {

  return (
  <div className="App">
        <StoreProvider store={store}>
    <BrowserRouter>        
          
          <Routes/>
       
 
      </BrowserRouter>
    </StoreProvider>
     </div>
  );
}

export default App;

