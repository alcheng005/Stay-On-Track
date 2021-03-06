import React, { useState, useEffect } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Protected from './Protected.jsx';

const AuthContainer = () => {
  const [loggedIn, switchLoggedIn] = useState(false);
  const [toggle, switchToggle] = useState(false);

  return (
    <div>
      {loggedIn ? null : toggle ? <Login /> : <Signup />}
      <Protected />
    </div>
  );
};

export default AuthContainer;
