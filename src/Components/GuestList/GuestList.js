import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Guest from "../Guest";
import AddGuest from "../AddGuest";
import actions from "../../actions/contactsActions";
import { connect } from "react-redux";
import contactOperations from "../../operations/contactOperations";
import { filterSelector, getFilteredContact } from "../../selectors/selectors";

import "../Notifications/AlertAnimation.css";

const GuestList = ({ onAdd, search, onSearch, contacts }) => (
  <div className="phoneBookList">
    <AddGuest contacts={contacts} onAdd={onAdd} />
    <div className="Guest">
      <input
        type="text"
        value={search}
        onChange={onSearch}
        className="filter"
        placeholder="Find contact by name"
      />
      <TransitionGroup className="Guests">
        {contacts.map((user) => (
          <CSSTransition
            key={user.id}
            timeout={250}
            classNames="Guests-item-fade"
            unmountOnExit
          >
            <Guest id={user.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  filter: filterSelector(state),
  contacts: getFilteredContact(state),
});

const mapDispatchToProps = {
  onAdd: contactOperations.addContact,
  onSearch: actions.onSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);
