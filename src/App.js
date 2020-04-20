import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../src/Components/LandingPage/LandingPage'
import GetAppointment from './Components/GetAppointment/GetAppointment'
import DoctorPanel from './Components/DoctorPanel/DoctorPanel';
import UserForm from './Components/UserForm/UserForm'

export const DateContext = createContext();

function App() {

  const [dateContext, setDateContext] = useState();

  return (
    <DateContext.Provider value={[dateContext, setDateContext]}>
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
            <Route exact path="/userForm/:id">
              <UserForm></UserForm>
            </Route>
          </Switch>
        </div>
      </Router>
    </DateContext.Provider>
  );
}

export default App;