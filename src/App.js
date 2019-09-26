import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import shopPage from './pages/shop/shop.component'
import Homepage from './pages/homepage/homepage.components';
import Header from './components/header/header.component'
import SignInandSingUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { dispatch } from 'rxjs/internal/observable/range';
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {

    unsubscribeFromAuth = null

    // when page mounts this sets unsubscribeFromAuth to the logged user details  and
    // also to currentUser object

    componentDidMount() {

        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
              setCurrentUser({

                  id: snapShot.id,
                  ...snapShot.data()

              });

              console.log(this.state);
            });
          }

          setCurrentUser(userAuth);
        });
      }



    // this is to cancel any previous connections etc. so its used for signing out
    // logged user
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {

        //const currentUser = this.state.currentUser

        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={shopPage}/>
                    {/* if user is already signed-in redirect to main home page*/}
                    <Route exact path='/signin' render={() =>
                      this.props.currentUser ?
                      (<Redirect to='/' />) :
                      ( <SignInandSingUp /> )} />



                    {/* <Route path='/signin' component={SignInandSingUp}/> {/*exact={true} means go to the exact url location*/} */}
                    {/*<Switch> means, render if there is a match*/}
                    {/*<Link to='/tops'>Tops</Link> */}
                </Switch>
            </div>
        );
    }

}

//get the current state of the user object to be used in the to redirect to the main page if user is already logged-in
const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // using the current user as the paylod in ./redux/user/user.action
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

/* Use null as the first argument because we dnt need any props to use as state
  Import setCurrentuser to use a the main user object, which replaces the main state
*/
