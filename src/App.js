import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Game from './Game/Game'
import Home from './Home/Home';
import './App.scss';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Team Hangman</Navbar.Brand>
        </Navbar>

        <main>
          <HashRouter>
            <div>
              <Switch>
                <Route path={`/game`}>
                  <Game/>
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
            </div>
          </HashRouter>
        </main>
      </div>
    )
  }
}
