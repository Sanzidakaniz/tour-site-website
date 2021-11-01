import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/SharedComponent/Header/Header';
import Login from './pages/AccountPage/LoginPage/Login';

import Home from './pages/HomePage/Home';

import SingleService from './pages/HomePage/SingleService/SingleService';
import AuthProvider from './Context/AuthProvider';

import PrivateRoute from './pages/AppointmentPage/PrivateRoute/PrivateRoute';
import About from './pages/AboutPage/About';
import Footer from './pages/SharedComponent/Footer/Footer';

import ErrorPage from './pages/Error404Page/ErrorPage';
import Contact from './pages/Contact/Contact';
import AddService from './pages/AddService/AddService';





function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
          <PrivateRoute exact path="/services/singleService/:uniqueId">
            <SingleService />
          </PrivateRoute>
          
          <Route exact path="/account">
            <Login />
          </Route>
          
         <Route exact path="/Contact">
   <Contact></Contact>
      </Route>
         <PrivateRoute  exact path="/AddService">
   <AddService></AddService>
   </PrivateRoute>
          <Route path="*">
          <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
