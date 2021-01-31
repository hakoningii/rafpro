import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../firebase.js';
import { connect } from 'react-redux';
import { AuthContext } from '../../Auth';
import AddUser from '../AddUser/AddUser';
import ContactCard from '../ContactCard/ContactCard';

const Contacts = (props) => {
  
  const [tengilidir, setTengilidir] = useState([])

  const [showAddUser, setShowAddUser] = useState(false);

  const currentUser = useContext(AuthContext);

  const fetchTengilidir = async () => {
    const db = firebase.firestore()
    const response = db.collection('tengilidir');
    const data = await response.get();
    data.docs.map(item => {
     setTengilidir(data.docs.map(doc => doc.data()))
    })
}

useEffect(() => {
  fetchTengilidir();
}, [])

console.log(tengilidir)

  return (
    <div>

      { currentUser ? 
      <div>
        <button style={{padding: 5, margin: 5}}className="btn btn-primary" onClick={() => {setShowAddUser(true)}}>Bæta við tengilið</button>
      </div> : ''
      }

      {showAddUser ? <AddUser /> : ''}

      {tengilidir.map(tengilidur =>
          <ContactCard data={tengilidur} count={tengilidir.length}/>
      )}

    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loggedin
  }
}

export default connect(mapStateToProps)(Contacts);