import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/constants";
import { useDispatch } from "react-redux";
import "./Login.css";
import { loginOperation } from "../../operations/auth";

const initialState = { email: "", password: "" };

const Login = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(loginOperation(form));
    console.log(form);
  };
  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={submit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={inputHandler}
          value={form.email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={inputHandler}
          value={form.password}
        />
        <button>Sign in</button>
        <p>
          You don`t have any account? Please
          <NavLink to={navigation.register}>&nbsp;register</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
