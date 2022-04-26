import React, { ChangeEvent, useState } from 'react';
import '../../App.css';

function Register() {
  let [firstname, setFirstName] = useState('');
  let [lastname, setLastName] = useState('');
  let [username, setUserName] = useState('');
  let [password, setPassword] = useState('');

  const OnInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    let tempInfo = event.target.value;
    if (event.target.name === 'firstname') {
      setFirstName(tempInfo);
    }
    if (event.target.name == 'lastname') {
      setLastName(tempInfo);
    }
    if (event.target.name == 'username') {
      setUserName(tempInfo);
    }
    if (event.target.name == 'password') {
      setPassword(tempInfo);
    }
    console.log(event.target.name +':' + tempInfo);
    
  };
  return (
    <div className='Form'>
      <div className='Form-Label'>
        <label className='Label'>Register</label>
      </div>
      <div className='Input-Container'>
        <label htmlFor='firstname' className='Label'>
          First Name:{' '}
        </label>
        <input
          type='text'
          name='firstname'
          placeholder='First Name'
          className='Input'
          value={firstname}
          onChange={OnInputChanged}
        />
      </div>
      <div className='Input-Container'>
        <label htmlFor='lastname' className='Label'>
          Last Name:{' '}
        </label>
        <input
          type='text'
          name='lastname'
          placeholder='Last Name'
          className='Input'
          value={lastname}
          onChange={OnInputChanged}
        />
      </div>
      <div className='Input-Container'>
        <label htmlFor='username' className='Label'>
          User Name:{' '}
        </label>
        <input
          type='text'
          name='username'
          placeholder='User Name'
          className='Input'
          value={username}
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

      <button type='submit' className='Login-Btn'>
        Register
      </button>
    </div>
  );
}
export default Register;
