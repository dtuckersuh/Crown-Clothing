import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Firebase libraries
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

// Redux 
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/userSlice';

// Pages
import Homepage from './pages/homepage/homepage-component.jsx';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Components
import Header from './components/header/header.component'

import './App.css';

class App extends React.Component {
  
  // Prevent memory leak when component is unmounted
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // userRef: DocumentReference object
        const userRef = await createUserProfileDocument(userAuth)
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          }) 
        })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div> 
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ?
            (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

// Redux methods
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
