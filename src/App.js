import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../src/Components/LandingPage/LandingPage'
import GetAppointment from './Components/GetAppointment/GetAppointment'
import DoctorPanel from './Components/DoctorPanel/DoctorPanel';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/getAppointment">
            <GetAppointment></GetAppointment>
          </Route>
          <Route exact path="/doctorPanel">
            <DoctorPanel></DoctorPanel>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;