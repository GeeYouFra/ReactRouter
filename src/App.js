import './App.css';
import Home from './component/Home';
import About from './component/About';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2> Welcome to React Router </h2>

      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/About">About</Link>{' '}
          <Link to="/Contact">Contact</Link>{' '}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" render={() => <h3>This is Contact Address page</h3>} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
