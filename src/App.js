import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTypes from './pages/CreateTypes';
import CreateStatus from './pages/CreateStatus';
import RegisterTags from './pages/RegisterTags';
import CreateResource from './pages/CreateResource';
import AddTagValue from './pages/AddTagValue';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/types' component={CreateTypes} />
          <Route path='/status' component={CreateStatus} />
          <Route path='/tagReg' component={RegisterTags} />
          <Route path='/resource' component={CreateResource} />
          <Route path='/tagValue' component={AddTagValue} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
