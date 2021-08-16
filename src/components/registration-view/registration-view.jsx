import React, { useState } from 'react';
import axios from 'axios';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://pacific-thicket-04049.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email
    })
    .then(response => {
      const data = response.data;
      //props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('error creating user', e)
    });
  ;
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
      <label>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
  }