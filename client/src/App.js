import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Register from './components/Register'
import ExperienceCard from './components/ExperienceCard'
import ExperienceContainer from './components/ExperienceContainer'
import ExperienceForm from './components/ExperienceForm'
import DestinationCard from './components/DestinationCard'
import DestinationContainer from './components/DestinationContainer'
import DestinationForm from './components/DestinationForm'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
