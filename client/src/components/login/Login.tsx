import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function Login() {
  let navigate = useNavigate();

  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');

  const OnInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    let tempInfo: string = event.target.value;
    event.target.name === 'username'
      ? setUserName(tempInfo)
      : setPassword(tempInfo);
  };
  const onLoginClicked = () => {
    let loginData = { userName, password };
    try {
      axios
        .post('http://localhost:3001/users/login', loginData)
        .then((response) => {
          let serverResponse = response.data;
          console.log('serverResponse:'+serverResponse);
          serverResponse.userType === 'Admin'
            ? navigate('/admin')
            : navigate('/customer');
        });
    } catch (e) {
      console.error(e);
      alert('Login failed');
    }
  };

  return (
    <form
      action=''
      className='Form'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className='Input-Container'>
        <label htmlFor='username' className='Label'>
          User Name:{' '}
        </label>
        <input
          type='text'
          name='username'
          placeholder='User Name'
          className='Input'
          value={userName}
          onChange={OnInputChanged}
        />
      </div>
      <div className='Input-Container'>
        <label htmlFor='password' className='Label'>
          Password:{' '}
        </label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='Input'
          value={password}
          onChange={OnInputChanged}
        />
      </div>
      <button type='submit' className='Login-Btn' onClick={onLoginClicked}>
        Login
      </button>
    </form>
  );
}
export default Login;
