import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import ActivityContainer from "./components/ActivityContainer";
import DestinationContainer from "./components/DestinationContainer";
import ExperienceContainer from "./components/ExperienceContainer";
import ExperienceForm from "./components/ExperienceForm";
import "./styles/App.css"

function App() {
  const [user, setUser] = useState(null)
  const [experiences, setExperiences] = useState([])
  const [destinations, setDestinations] = useState([])
  const [activities, setActivities] = useState([])


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/experiences")
    .then(r => r.json())
      .then(setExperiences)
  }, [])

  useEffect(() => {
    fetch("/destinations")
    .then(r => r.json())
      .then(setDestinations)
  }, [])

  useEffect(() => {
    fetch("/activities")
    .then(r => r.json())
      .then(setActivities)
  }, [])


  // if (user) return <Home />

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} setUser={setUser} />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login 
              user={user} 
              setUser={setUser}
            />
          </Route>

          <Route exact path="/registerform">
            <RegisterForm 
              user={user} 
              setUser={setUser}
            />
          </Route>

          <Route exact path="/experienceform">
            <ExperienceForm 
              user={user}
              setUser={setUser}
              experiences={experiences}
              setExperiences={setExperiences}
              destinations={destinations}
              setDestinations={setDestinations}
              activities={activities}
              setActivities={setActivities}
            />
          </Route>

          <Route exact path="/experiences">
            <ExperienceContainer
              experiences={experiences}
              setExperiences={setExperiences}
            />
          </Route>

          <Route exact path="/destinations">
            <DestinationContainer
              destinations={destinations}
              setDestinations={setDestinations}
            />
          </Route>

          <Route exact path="/activities">
            <ActivityContainer 
              activities={activities}
              setActivities={setActivities}
            />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>  
  );
}

export default App;
