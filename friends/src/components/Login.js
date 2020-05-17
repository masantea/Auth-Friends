import React, { useState } from "react"; //import useState
import axios from "axios";

const Login = (props) => { //using hooks // props from the route(App.js)
 
  const [username, setUsername] = useState('') 
  const [password, setPassword]= useState('')

 console.log(props)

  const login = e => {
    e.preventDefault();
    //Make a POST request and send the credentials object to the api
    axios
      .post('http://localhost:5000/api/login', {username, password} )
      .then(res => (localStorage.setItem('token', res.data.payload), console.log(res))) //first consolelog res, 
      .catch(err => console.log(err.message))

      props.history.push('/protected')
   

  };

  
    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            // name="username" nolonger needed because we arent using a single object for state
            // value={this.state.credentials.username} nolonger needed because we arent using a single object for state
            onChange={(e) => setUsername(e.target.value)} //need a function to take in the value (function)
          />
          <input
            type="password"
            // name="password"
            // value={this.state.credentials.password}
            onChange={(e) => setPassword(e.target.value)}// callback func that returns setPassord being invoked, then give it a value
          />
          <button>Log in</button>
        </form>
      </div>
    );
  
}

export default Login;