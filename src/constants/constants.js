const SEARCH = "@CONTACTS/SET_SEARCH";

const ACR = "@CONTACTS/ADD_REQUEST";
const ACS = "@CONTACTS/ADD_SUCCESS";
const ACF = "@CONTACTS/ADD_FAIL";

const FCR = "@CONTACTS/FETCH_REQUEST";
const FCS = "@CONTACTS/FETCH_SUCCESS";
const FCF = "@CONTACTS/FETCH_FAIL";

const DCR = "@CONTACTS/DELETE_CONTACT_REQUEST";
const DCS = "@CONTACTS/DELETE_CONTACT_SUCCESS";
const DCF = "@CONTACTS/DELETE_CONTACT_FAIL";

export const navigation = {
  contacts: "/contacts",
  login: "/login",
  register: "/register",
  home: "/",
};

export default {
  SEARCH,
  ACR,
  ACF,
  ACS,
  FCR,
  FCS,
  FCF,
  DCR,
  DCS,
  DCF,
};
