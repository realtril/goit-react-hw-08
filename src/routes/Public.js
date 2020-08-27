import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { navigation } from "../constants/constants";

const Public = ({ getToken, Component, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        getToken && routeProps.restricted ? (
          <Redirect to={navigation.contacts} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({ getToken: state.auth.token });

export default connect(mapStateToProps)(Public);
