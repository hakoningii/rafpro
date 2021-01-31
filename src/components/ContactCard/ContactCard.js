import React, { useContext } from 'react';
import { FaPhone } from 'react-icons/lib/fa'
import { TiMail } from 'react-icons/lib/ti'
import { IoCloseRound } from 'react-icons/lib/io';
import { AuthContext } from '../../Auth';
import firebase from '../../firebase';

const ContactCard = props => {

    const currentUser = useContext(AuthContext);

    const db = firebase.firestore()

    const onDeleteCard = () => {
        var contact = db.collection('tengilidir').where('name', '==', props.data.name);
        contact.get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                doc.ref.delete()
            })
        })
        /*
        db.collection('tengilidir').doc(props.data.name).delete().then(function() {
            console.log("Successfully Deleted:", props.data.name);
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        })
        */
    }

    /*
    
   var jobskill_query = db.collection('job_skills').where('job_id','==',post.job_id);
jobskill_query.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete();
  });
});
    */

    return (
        <div style={{backgroundColor: 'red', width: '100%'}}>
            <ul style={{ listStyle: "none" }}>
                    <li key={props.data.id} style={{ borderStyle: "solid 1px black", width: "30%", backgroundColor: '#FFFAFA', borderColor: '#6c757d', margin: 14, padding: 10, float: 'left', borderRadius: 20, boxShadow: "10px 10px 8px #888888" }}>
                        <div>
                            <p style={{ fontWeight: "bold" }}>{props.data.name}
                                {currentUser ?
                                    <button onClick={onDeleteCard} style={{ float: 'right', border: 'none' }} ><IoCloseRound style={{ color: 'red' }}
                                    /></button> : <div></div>
                                }
                            </p>
                            <p style={{ color: "gray" }}>{props.data.education[0]}
                                <img src={props.data.image} alt="image" style={{ float: "right", width: '75px', height: '75px', borderRadius: 75 / 2, marginRight: 30 }} />
                            </p>
                            <p style={{ color: "gray" }} >
                                <FaPhone color="rgba(189, 45, 33, 1)" />{props.data.phone}
                            </p>
                            <TiMail color="rgba(189, 45, 33, 1)" /> <a href="#">{props.data.email}</a>
                        </div>
                    </li>
            </ul>
        </div>
    )
}

export default ContactCard;