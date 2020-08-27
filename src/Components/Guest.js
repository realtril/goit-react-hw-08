import React from "react";
import { connect } from "react-redux";
import { getContactById } from "../selectors/selectors";
import contactOperations from "../operations/contactOperations";

const Guest = ({ name, number, onDelete }) => {
  return (
    <div className="contact">
      <h2 className="contactName">{name}</h2>
      <p>{number}</p>
      <button className="delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const user = getContactById(state, ownProps.id);
  return { ...user };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(contactOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Guest);
