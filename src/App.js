import { HashRouter, Route, Switch } from "react-router-dom";
import  Home  from './Home/Home';
import './App.scss';
import {Navbar} from "react-bootstrap";


export default function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Team Hangman</Navbar.Brand>
      </Navbar>

      <main>
        <HashRouter>
          <div>
            <Switch>
              <Route path={`/game/:gameId`}>
                <h2>GAME</h2>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </HashRouter>
      </main>
    </div>
  );
}
