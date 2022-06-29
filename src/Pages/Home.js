import React, { useContext } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import Login from '../Components/Login/Login';
import Modal from '../Components/Login/Modal';
function Home(props) {
  return (
    <div className="homeParentDiv">
      <Modal>
      <Header />
      <Banner />
      <Posts />
      <Login/>
      <Footer />
      </Modal>
    </div>
  );
}

export default Home;
 
