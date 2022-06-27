import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {fireBaseCotext, authContext} from'../../Store/firebaseContext'
import { useHistory } from 'react-router-dom';
const Create = () => {
  const {firebase} = useContext (fireBaseCotext)
  const {user} = useContext(authContext)
  const history = useHistory(authContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPtice] = useState('')
  const [image, setImage] = useState('')

  const date = new Date()

  const handleSubmit = ()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdDate:date.toDateString()
        })
        history.push('/')
      })
    })
  }


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
              defaultValue=""
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              defaultValue=""
            />
            <br />
            <label htmlFor="fname"

            >Price</label>
            <br />
            <input className="input" value={price}
              onChange={(e) => setPtice(e.target.value)} type="number" id="fname" name="Price" />
            <br />
          
          <br />
          <img   alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
         
            <br />
            <input  onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
