import React, { useState, useContext } from 'react';
import {fireBaseCotext} from '../../Store/firebaseContext'
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(fireBaseCotext)
  const history = useHistory()
const handleLogin =(e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    history.push('/')
  }).catch((error)=>{
    alert(error)

  })
}

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
