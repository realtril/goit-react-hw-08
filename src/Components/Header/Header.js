import React from "react";
import { navigation } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UserMenu from "../../Components/UserMenu/UserMenu";
import "./Header.css";

const Header = ({ getToken }) => {
  return (
    <header className="header">
      {getToken ? (
        <UserMenu />
      ) : (
        <ul>
          <li className="nav-menu">
            <NavLink to={navigation.login}>Login</NavLink>
          </li>
          <li className="nav-menu">
            <NavLink to={navigation.register}>Register</NavLink>
          </li>
          <li className="nav-menu">
            <NavLink to={navigation.contacts}>Contacts</NavLink>
          </li>
          <li className="nav-menu">
            <NavLink to={navigation.home}>Home</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

const mapStateToProps = (state) => ({ getToken: state.auth.token });

export default connect(mapStateToProps)(Header);
