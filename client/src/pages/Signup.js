import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        userName: formState.userName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="main">
      <div className="login-container">
        {/* <Link to="/login">← Go to Login</Link> */}

        <p className="title">Sign up!</p>
        <div className="signUpDivision"></div>
        <p class="welcome-note">Please enter a username, as well as a valid email address and password</p>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <input
              className="signup py-2"
              placeholder="Username"
              name="userName"
              type="userName"
              id="userName"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <input
              className="signup py-2"
              placeholder="Email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">

            <input
              className="signup py-2"
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button className="submit" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
