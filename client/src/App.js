import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
// import ExperienceCard from "./components/ExperienceCard";
import ExperienceContainer from "./components/ExperienceContainer";
import ExperienceForm from "./components/ExperienceForm";
import DestinationCard from "./components/DestinationCard";
import DestinationContainer from "./components/DestinationContainer";
import DestinationForm from "./components/DestinationForm";
import UsersContainer from "./components/UsersContainer";
import UsersCard from "./components/UsersCard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [displayCard, setDisplayCard] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  const onLogIn = (loggedInUser) => {
    setCurrentUser(loggedInUser);
  };

  const onLogOut = () => {
    setCurrentUser(null);
  };

  const onShowDetails = (details) => {
    setDisplayCard(details);
  };

  const onDestroyUser = () => {
    setCurrentUser(null);
    setDisplayCard(null);
  };

  const [experiences, setExperiences] = useState([])
  const [showExpForm, setShowExpForm] = useState(false)

  useEffect(() => {
    fetch('/experiences')
    .then (r => r.json())
    .then (experiences => setExperiences(experiences))
  }, [])

  function toggleExperienceForm() {
    setShowExpForm(!showExpForm)
  }

  function onSubmitNewExperience(newExperience) {
    setExperiences([...experiences, newExperience])
    toggleExperienceForm()
  }

  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetch('/destinations')
    .then (r => r.json())
    .then (destinations => setDestinations(destinations))
  }, [])

  function onSubmitNewDestination(newDestination) {
    setDestinations([...destinations, newDestination])
  }


  console.log(currentUser)

  return (
    <div className="App">
      <NavBar 
        currentUser={currentUser} 
        onLogOut={onLogOut} 
      />
        <BrowserRouter>

          <Switch>

            <Route exact path="/">
              <Home currentUser={currentUser} />
            </Route>

            <Route exact path="/destinations">
              <DestinationContainer 
                destinations={destinations}
                onSubmitNewDestination={onSubmitNewDestination}
              />
            </Route>

            <Route exact path="/destinations/:id">
              <DestinationCard
                onShowDetails={onShowDetails}
                displayCard={displayCard}
                currentUser={currentUser}
                destinations={destinations}
              />
            </Route>

            <Route exact path="/destinationform">
              <DestinationForm 
                destinations={destinations}
                onSubmitNewDestination={onSubmitNewDestination}
              />
            </Route>

            <Route exact path="/experiences">
              <ExperienceContainer />
            </Route>

            <Route exact path="/experienceform">
              <ExperienceForm 
                onSubmitNewExperience={onSubmitNewExperience}
                toggleExperienceForm={toggleExperienceForm}
                showExpForm={showExpForm}
                experiences={experiences}
                currentUser={currentUser}
                destinations={destinations}
              />
            </Route>

            <Route exact path="/users">
              <UsersContainer />
            </Route>

            <Route exact path="/users/:id">
              <UsersCard
                onShowDetails={onShowDetails}
                displayCard={displayCard}
                currentUser={currentUser}
                onDestroyUser={onDestroyUser}
              />
            </Route>

            <Route exact path="/about">
              <About currentUser={currentUser} />
            </Route>

            <Route exact path="/login">
              <Login onLogIn={onLogIn} />
            </Route>

            <Route exact path="/register">
              <Register onLogIn={onLogIn} />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
