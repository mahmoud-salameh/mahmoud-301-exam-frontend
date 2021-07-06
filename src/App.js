import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Favorite from './Components/Favorite';
import Header from './Components/Header';
import Home from './Components/Home';

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/favorite">
              <Favorite/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
