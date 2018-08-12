import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { setCurrentUser, logoutUser, loginUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from '../app/store/store';
import PrivateRoute from '../app/components/common/PrivateRoute';
import Header from '../app/components/Header/Header';
import Footer from '../app/components/Footer/Footer';
import Home from '../app/components/Home/Home';
import Profile from '../app/components/Pages/Profile/Profile';
import Assignments from '../app/components/Pages/Assignments/Assignments';
import Contests from '../app/components/Pages/Contests';
import Courses from '../app/components/Pages/Courses/Courses';
import NotFound from './components/App/NotFound';
import SignupForm from '../app/components/Admin/SignupForm';
import AssignmentAdd from '../app/components/Pages/Courses/AddAssignment'
import viewSubmissions from './components/Pages/Assignments/viewSubmissions';
import viewAssignment from './components/Pages/Assignments/viewAssignment';

import './styles/styles.scss';



if (localStorage.token) {
  store.dispatch(setCurrentUser(localStorage.token));
} else {
  store.dispatch(setCurrentUser({}));
}
render((
  <Provider store={store}>
    <Router>
      <div className='App'>
        <Header />

        <div className='container'>
          {/* <Switch>
        <Route path="/login" component={Login}/>
      </Switch> */}
          {/* <Switch>
                <PrivateRoute exact path="/landing" component={Landing} />
     </Switch> */}

          <Switch>
            <Route exact path="/" component={Home} />

            <PrivateRoute exact path="/assignments" component={Assignments} />

            <PrivateRoute exact path="/contests" component={Contests} />

            <PrivateRoute exact path="/courses" component={Courses} />

            <PrivateRoute exact path="/profile" component={Profile} />

            <PrivateRoute exact path="/admin" component={SignupForm} />

            <PrivateRoute exact path="/courses/:courseID" component={AssignmentAdd}  />

            <PrivateRoute exact path="/assignments/submissions/:assignmentID" component={viewSubmissions}  />

            <Route exact path="/assignments/:assignmentID" component={viewAssignment}  />
            
            <Route component={NotFound} />
          </Switch>

        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
), document.getElementById('app'));
