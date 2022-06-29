import React, { Fragment } from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import Modal from '../Components/Login/Modal';

const CreatePage = () => {
  return (
    <Fragment>
      <Modal>
      <Header />
      <Create/>
      </Modal>
    </Fragment>
  );
};

export default CreatePage;
