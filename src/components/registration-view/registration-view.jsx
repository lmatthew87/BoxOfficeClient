import React, { useState } from 'react';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server to register the user */
    /* then switch to the LoginView */
    props.onComplete();
  };

  return (
    <form>
      <label>
        New Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}