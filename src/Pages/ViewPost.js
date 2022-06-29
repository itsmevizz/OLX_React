import React from 'react'

import Header from '../Components/Header/Header'
import View from '../Components/View/View'
import Modal from '../Components/Login/Modal'
import Login from '../Components/Login/Login'

function ViewPost(props) {
    return (
        <div>
            <Modal>
            <Header />
            <View/>
            <Login/>
            </Modal>
        </div>
    )
}

export default ViewPost
