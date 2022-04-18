import React, { ChangeEvent, useState } from 'react';

function Login() {
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');

  const OnInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    let tempInfo = event.target.value;
    event.target.name == 'username'
      ? setUserName(tempInfo)
      : setPassword(tempInfo);
    console.log('userName' + userName);
    console.log('password' + password);
  };
  return (
    <div className='Login'>
      <form action='' className='Form'>
        <div className='Login-Container'>
          <label htmlFor='username' className='User-Label'>
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
        <div className='Login-Container'>
          <label htmlFor='password' className='User-Label'>
            User Name:{' '}
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
        <button type="submit" id="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
