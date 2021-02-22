import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderTemplate from './Template/HeaderTemplate';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Template/Home';
import Portopolio from './Template/Portopolio';
import AboutUs from './Template/AboutUs';
import JournalEntry from './Template/JournalEntry';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    <HeaderTemplate />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/journalentry" component={JournalEntry} />
        <Route path="/portopolio" component={Portopolio} />
        <Route path="/about" component={AboutUs} />        
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
