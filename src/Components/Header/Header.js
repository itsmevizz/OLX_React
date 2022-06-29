import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { authContext, fireBaseCotext } from '../../Store/firebaseContext';
import {popUpContext} from '../Login/Modal'
function Header() {
  const {user} = useContext(authContext)
  const {firebase} = useContext(fireBaseCotext)
  const history = useHistory()
  const {setIsOpen} = useContext(popUpContext)
  const {isOpen} = useContext(popUpContext)
  return (
    <div className={isOpen? "position" : "headerParentDiv"}>
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span style={{cursor:'pointer'}} onClick={()=>{
            if(!user){
              // history.push('/login')
              setIsOpen(true)
            }else{
              history.push('/')
            }
          }} >{user? ` ${user.displayName}` : 'Login' }</span>
          <hr />
        </div>
        {user && <span style={{cursor:'pointer'}} onClick={()=>{
          firebase.auth().signOut()
          history.push('/')
        }}  >Logout</span>}
        <div onClick={
          ()=>{
            if (user) {
              
              history.push('/create')
            }else{
              setIsOpen(true)
            }
          }
        } className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
