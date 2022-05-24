import React, { useState } from 'react';
import { signUpUser, signInUser } from './services/supabase-utils';

export default function AuthPage({ setCurrentUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  function clearForms() {
    setSignUpEmail('');
    setSignUpPassword('');
    setSignInPassword('');
    setSignInEmail('');
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser(signUpEmail, signUpPassword);
    setCurrentUser(user);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signInEmail, signInPassword);
    setCurrentUser(user);
    clearForms();
  }

  return (
    <div className="auth-page">
      <div>
        <h3>Sign In</h3>
        <form onSubmit={handleSignUp}>
          <label>
            Email
            <input
              value={signUpEmail}
              type="email"
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              value={signUpPassword}
              type="password"
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
          </label>
          <button>Sign Up</button>
        </form>
      </div>
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={handleSignIn}>
          <label>
            Email
            <input
              value={signInEmail}
              type="email"
              onChange={(e) => setSignInEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              value={signInPassword}
              type="password"
              onChange={(e) => setSignInPassword(e.target.value)}
            />
          </label>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}
