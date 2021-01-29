import React, { useState } from "react";
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
}
const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', formValues)
    .then(res=>{
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      props.history.push('/bubbles')
    })
    .catch(err=>{
      console.log('Login error', err.response)
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <label> Username
          <input 
          type='text'
          name='username'
          onChange={handleChange}
          value={formValues.username}
          placeholder='username ..'
          />
        </label>

        <label> Password
          <input 
          type='password'
          name='password'
          onChange={handleChange}
          value={formValues.password}
          placeholder='password ..'
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
