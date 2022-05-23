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

    const user = await signupUser(signUpEmail, signUpPassword);
    setCurrentUser(user);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signUpEmail, signUpPassword);
    setCurrentUser(user);
    clearForms();
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSignUp}>
          <label>
            email
            <input
              value={signUpEmail}
              type="email"
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
          </label>
          <label>
            password
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
        <form onSubmit={handleSignIn}>
          <label>
            email
            <input
              value={signInEmail}
              type="email"
              onChange={(e) => setSignInEmail(e.target.value)}
            />
          </label>
          <label>
            password
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
