import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Home from "./containers/Home/Home";
import { navigation } from "./constants/constants";
import Header from "./Components/Header/Header";
import Public from "./routes/Public";
import Private from "./routes/Private";
import { connect } from "react-redux";
import contactOperations from "./operations/contactOperations";
import authOperations from "./operations/auth";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetch();
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <hr />
          <Switch>
            <Public path="/" exact component={Home} restricted={false} />
            <Public
              path={navigation.login}
              exact
              component={Login}
              restricted={true}
            />
            <Public
              path={navigation.register}
              component={Register}
              restricted={true}
            />
            <Private Component={Contacts} path={navigation.contacts} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  onFetch: contactOperations.getContacts,
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

// import GuestPhonebook from "./Components/GuestPhonebook/GuestPhonebook";
// import contactOperations from "./operations/contactOperations";
// import { connect } from "react-redux";

// class App extends Component {
//   componentDidMount() {
//     this.props.onFetch();
//   }
//   render() {
//     return (
//       <div className="App">
//         <GuestPhonebook />
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = {
//   onFetch: contactOperations.getContacts,
// };
