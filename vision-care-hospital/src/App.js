import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import Register from './components/Pages/Home/Register/Register';
import Login from './components/Pages/Home/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
