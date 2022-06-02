import React from "react";
import {Route, Switch} from "react-router-dom";
import CreateUser from "./CreateUser";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";
import Test from './Test'
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "./AdminPage";


const Routes = () => {
    return (
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/users" exact component={UsersList} />
          <PrivateRoute path="/admin-page" exact component={AdminPage} />
          <PrivateRoute path="/create-user" exact component={CreateUser} />
          <PrivateRoute path="/user/:id" exact component={UserDetails} />
          <PrivateRoute path="/test" exact component={Test} />
        </Switch>
    );
  };
  
  export default Routes;