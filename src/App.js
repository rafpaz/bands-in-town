import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import Homepage from "./components/Homepage";
import ErrorPage from "./components/ErrorPage";
import SearchPage from "./components/SearchPage";

const App = () => (
    <Router>
        <Switch>
            <Route exact path={"/"} component={Homepage}/>
            <Route exact path={"/search/:query"} component={SearchPage}/>
            <Route component={ErrorPage}/>
        </Switch>
    </Router>
);

export default App;
