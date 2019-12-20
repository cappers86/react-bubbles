// step 3 Login

import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

    const [credentials, setCredentials] = useState({
      username: '',
      password: '',
    });

    const onSubmit = (e) => {
      e.preventDefault();


      axiosWithAuth()
        .post('/login', credentials)
        .then(result => {
          console.log('post login', result.data)
          localStorage.setItem('token', result.data.payload);
          props.history.push('/bubblepage');
          console.log('login', props)
        })
        .catch(error => 
          console.log('login post error', error));
        
  };
      

 const hanleChange = (e) => {
   setCredentials({
     ...credentials,
     [e.target.name] : e.target.value
   })
 };

    


  return (
    <>
      
      <h1>Login in to your Bubble App!</h1>
      <form onSubmit = {onSubmit}>
          <input
              type ='text'
              name ='username'
              placeholder = 'username'
              value ={credentials.username}
              onChange = {hanleChange}
              />

              <br></br>

              <input
                  type ='password'
                  name ='password'
                  placeholder = 'password'
                  value ={credentials.password}
                  onChange = {hanleChange}
                  />
                    <br></br>

                  <button>login</button>
      </form>
      
    </>
  );
};

export default Login;


