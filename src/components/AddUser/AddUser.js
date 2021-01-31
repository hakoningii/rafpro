import React, { useState } from 'react';
import firebase from '../../firebase';

const AddUser = (props) => {

    const [name, setName] = useState(''); 
    const [education, setEducation] = useState(''); 
    const [phone, setPhone] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [image, setImage] = useState(''); 
    const [id, setId] = useState('');

    const db = firebase.firestore()

    const handleChangeName = e => {
        setName(e.target.value);
    }

    const handleChangeEducation = e => {
        setEducation(e.target.value)
    }

    const handleChangePhone = e => {
        setPhone(e.target.value)
    }

    const handleChangeEmail = e => {
        setEmail(e.target.value)
    }

    const handleChangeImage = e => {
        setImage(e.target.value)
    }

    const handleAddContact = event => {
        const data = {
            name: name,
            education: [education],
            id: props.count + 1,
            phone: phone,
            email: email,
            image: image
        }
        event.preventDefault()
        db.collection("tengilidir").doc().set(data)
    }

    return (
        <div>
            <form className="form-group" onSubmit={handleAddContact} style={{width: '60%'}}>
                <input className="form-control" type="text" placeholder="Nafn" value={name} onChange={handleChangeName}/>
                <input className="form-control" type="text" placeholder="Menntun" value={education} onChange={handleChangeEducation}/>
                <input className="form-control" type="text" placeholder="Símanúmer" value={phone} onChange={handleChangePhone}/>
                <input className="form-control" type="email" placeholder="E-mail" value={email} onChange={handleChangeEmail}/>
                <input className="form-control" type="text" placeholder="Mynd" value={image} onChange={handleChangeImage}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{float: 'right'}}>Staðfesta</button>
            </form>
        </div>
    )
}

export default AddUser;