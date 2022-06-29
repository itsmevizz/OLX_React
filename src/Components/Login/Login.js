import React, { useState, useContext } from 'react';
import {fireBaseCotext} from '../../Store/firebaseContext'
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';
import {popUpContext} from './Modal'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(fireBaseCotext)
  const {isOpen} = useContext (popUpContext)
  const {setIsOpen} = useContext(popUpContext)
  const history = useHistory()
const handleLogin =(e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    history.push('/')
    setIsOpen(false)
  }).catch((error)=>{
    alert(error)

  })
}
if (isOpen) {
  return  (
    <div className="wraper">
    <div>
      <div className="loginParentDiv">
        <div>
        <img onClick={()=>{setIsOpen(false)}} className="cancel" src="../../../Images/icons8-x-48.png" alt="" />
        </div>
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
        <a onClick={()=>{
          history.push('/signup')
        }} >Signup</a>
      </div>
    </div>
    </div>
  );
}else{
  return null
}
}

export default Login;
