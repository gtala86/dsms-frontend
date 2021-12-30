import React from "react";
import {
    Route,
    Routes, useRoutes
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./pages/users/UsersList";
import UserForm from "./pages/users/UsersForm"
import Home from "./pages/home/Home";



const App = () => {
    const routes = useRoutes([
        { path: '/', element: <Home></Home> },
        { path: '/users-list', element: <UserList></UserList> },
        { path: '/users-form', element: <UserForm></UserForm> },
    ]);

    return routes;
};

export default App;