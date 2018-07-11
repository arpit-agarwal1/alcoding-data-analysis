import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { setCurrentUser,logoutUser,loginUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from '../app/store/store';
import PrivateRoute from '../app/components/common/PrivateRoute';
import Header from '../app/components/Header/Header';
import Footer from '../app/components/Footer/Footer';
import Home from '../app/components/Home/Home';
import Profile from '../app/components/Pages/Profile/Profile';
import Assignments from '../app/components/Pages/Assignments/Assignments';
import Contests from '../app/components/Pages/Contests';
import Landing from '../app/components/Layout/Landing';
import Login from '../app/components/Login/Login';
import SignupForm from '../app/components/Admin/SignupForm';
import Courses from '../app/components/Pages/Courses/Courses';

import './styles/styles.scss';

if(localStorage.token){
  store.dispatch(setCurrentUser(localStorage.token));
}else{
  store.dispatch(setCurrentUser({}));
}
render((
  <Provider store={store}>
  <Router>
    <div className='App'>
      <Header />
      <Route exact path="/" component={Home}/>
      <div className='Container'>
      {/* <Switch>
        <Route path="/login" component={Login}/>
      </Switch> */}
      {/* <Switch>
                <PrivateRoute exact path="/landing" component={Landing} />
      </Switch> */}
      <Switch>
                <PrivateRoute exact path="/assignments" component={Assignments} />
      </Switch>
      <Switch>
                <PrivateRoute exact path="/contests" component={Contests} />
      </Switch>
      <Switch>
                <PrivateRoute exact path="/courses" component={Courses} />
      </Switch>
      <Switch>
                <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
	<Switch>
                <PrivateRoute exact path="/admin" component={SignupForm} />
      </Switch>
      </div>
    <Footer />
    </div>
  </Router>
  </Provider>
), document.getElementById('app'));
