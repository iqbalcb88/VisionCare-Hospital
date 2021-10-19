import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import Register from './components/Pages/Home/Register/Register';
import Login from './components/Pages/Home/Login/Login';
import Header from './components/Pages/Shared/Header/Header';
import Footer from './components/Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './components/Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/Pages/Home/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <PrivateRoute path='/details/:serviceId'>
            <ServiceDetails />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
