import React from "react";
import { connect } from "react-redux";
import authOperations from "../../operations/auth";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/constants";
import authSelectors from "../../selectors/authSelectors";
import "./UserMenu.css";

const UserMenu = ({ avatar, email, onLogout }) => {
  return (
    <>
      <div className="avatar-wrapper">
        <div className="account-avatar">
          <img
            className="avatar avatar--hover"
            src={avatar}
            alt="User avatar"
            width="44"
            height="44"
          />
        </div>
        <span className="account-title">{email}</span>
        <button className="logout-btn" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
      <div>
        <NavLink to={navigation.contacts}>Contacts</NavLink>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
  avatar:
    "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg",
});

export default connect(mapStateToProps, {
  onLogout: authOperations.logOut,
})(UserMenu);
