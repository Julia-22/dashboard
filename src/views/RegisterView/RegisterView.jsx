import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import operation from '../../redux/authorization/operation';
import '../auth.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  }

  const handleChangePassword = event => {
    setPassword(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(operation.register({ email, password }));

    setEmail('');
    setPassword('');
  }

  return (
    <form className="auth_form" onSubmit={handleSubmit}>
      <input
        className="auth_from_input"
        type="mail"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleChangeEmail}
        autoComplete="off"
      />
      
      <input
        className="auth_from_input"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChangePassword}
        autoComplete="off"
      />

      <div className='button_container'>
        <Link
          className="button_link"
          to="/login">
          <button type="button">Login</button>
          <span></span>
        </Link>
        <button className="button_submit" type="submit">Sign Up</button>
      </div>

    </form>
  );
}