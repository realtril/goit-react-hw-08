import { lazy } from "react";
import { navigation } from "../constants/constants";

export default [
  {
    path: navigation.home,
    label: "Home",
    exact: true,
    component: lazy(() => import("../containers/Home/Home")),
    private: false,
    restricted: false,
  },
  {
    path: navigation.register,
    label: "Register",
    exact: true,
    component: lazy(() => import("../containers/Register/Register")),
    private: false,
    restricted: true,
  },
  {
    path: navigation.login,
    label: "Login",
    exact: true,
    component: lazy(() => import("../containers/Login/Login")),
    private: false,
    restricted: true,
  },
  {
    path: navigation.contacts,
    label: "Contacts",
    exact: true,
    component: lazy(() => import("../containers/Contacts/Contacts")),
    private: true,
    restricted: false,
  },
];
