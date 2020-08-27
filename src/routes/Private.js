import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { navigation } from "../constants/constants";

const Private = ({ getToken, Component, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        getToken ? <Component {...props} /> : <Redirect to={navigation.login} />
      }
    />
  );
};

const mapStateToProps = (state) => ({ getToken: state.auth.token });

export default connect(mapStateToProps)(Private);
