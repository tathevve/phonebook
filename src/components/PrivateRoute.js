import React from 'react';
import { Route,Redirect } from 'react-router-dom';


const PrivateRoute = (props) => {

    
    return (
        <>
       
        {localStorage.getItem('authorized') ? (
            <Route {...props}/>
        ) : <Redirect to='/'/>}
        </>
    )
} 

export default PrivateRoute;