import contactsActions from "../actions/contactsActions";
import axios from "axios";

const addContact = (contact) => (dispatch) => {
  dispatch(contactsActions.onAddRequest());
  axios
    .post("http://localhost:2000/contacts", { ...contact })
    .then((response) => dispatch(contactsActions.onAddSuccess(response.data)))
    .catch((error) => dispatch(contactsActions.onAddFail(error)));
};

const getContacts = () => (dispatch) => {
  dispatch(contactsActions.onFetch());
  axios
    .get("http://localhost:2000/contacts")
    .then((response) => dispatch(contactsActions.onFetchSuccess(response.data)))
    .catch((error) => dispatch(contactsActions.onFetchError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactsActions.onDeleteContact());
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(contactsActions.onDeleteSuccess(id)))
    .catch((error) => dispatch(contactsActions.onDeleteFail(error)));
};

export default {
  addContact,
  getContacts,
  deleteContact,
};
