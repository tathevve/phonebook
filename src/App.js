import './App.css';
import React, { useState, useMemo } from 'react';
import {BrowserRouter, Router} from "react-router-dom"

import { Provider as StoreProvider } from "react-redux";
import store from "./redux/index";

import Routes from './components/Routes';

function App() {

// const [selectedSort, setSelectedSort] = useState('')
// //const [searchTerm, setSearchTerm] = useState('');
// const [addUser,setAddUser] = useState([
//   {
//     isClicked: false
//   }
// ]);

// const sortedPosts = useMemo(()=> {
//   console.log('obrabotka')
//   if (selectedSort) {
//     return [...users].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
//   }
//   return users;
// },[selectedSort,users])

// const sortedAndSearchedPosts = useMemo (()=> {
//   return sortedPosts.filter(user=>user.name.toLowerCase().includes(searchTerm.toLowerCase()))
// },[searchTerm,sortedPosts])

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

